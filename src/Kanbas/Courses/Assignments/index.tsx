import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks"; 
import { fetchAssignments, addNewAssignment, deleteExistingAssignment } from "./reducer";
import { Assignment } from "./reducer";

export default function Assignments() {
  const dispatch = useAppDispatch();
  const assignments = useAppSelector((state) => state.assignmentsReducer.assignments);

  useEffect(() => {
    dispatch(fetchAssignments());
  }, [dispatch]);

  const handleAddAssignment = () => {
    const newAssignment: Assignment = {
      _id: new Date().getTime().toString(), 
      title: "New Assignment",
      description: "Default description",
      course: "Default Course",
      points: 100,
      availableFrom: "2024-06-01",
      availableUntil: "2024-06-15",
      dueDate: "2024-06-20",
    };
    dispatch(addNewAssignment(newAssignment));
  };

  const handleDeleteAssignment = (id: string) => {
    dispatch(deleteExistingAssignment(id));
  };

  return (
    <div>
      <h2>Assignments</h2>
      <ul>
        {assignments.map((assignment: Assignment) => (
          <li key={assignment._id}>
            {assignment.title}
            <button onClick={() => handleDeleteAssignment(assignment._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddAssignment}>Add Assignment</button>
    </div>
  );
}
