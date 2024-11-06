import { BsGripVertical } from "react-icons/bs";
import AllAssignmentsControlButtons from "./AllAssignmentsControlButtons";
import { FaCaretDown } from "react-icons/fa";
import { useParams } from "react-router";
import React from "react";
import AssignmentsHeaderControlButtons from "./AssignmentsHeaderControlButtons";
import AssignmentItem from "./AssignmentItem"; 
import { useDispatch, useSelector } from "react-redux";
import { deleteAssignment as deleteAssignmentAction, addAssignment as addAssignmentAction } from "./reducer";
import { RootState } from "../../store";  

export default function Assignments() {
    const { cid } = useParams<{ cid: string }>();
    const dispatch = useDispatch();
    const assignments = useSelector((state: RootState) => state.assignmentsReducer.assignments);

    const handleAddAssignment = () => {
        const newAssignment = {
            _id: `A${new Date().getTime()}`,
            title: "New Assignment",
            course: cid || "Default Course",
            description: "Default description",
            points: 100,
            availableFrom: "2024-06-01",
            availableUntil: "2024-06-15",
            dueDate: "2024-06-20",
        };
        dispatch(addAssignmentAction(newAssignment)); // 更新到 Redux Store
    };

    const handleDeleteAssignment = (id: string) => {
        dispatch(deleteAssignmentAction(id));
    };

    return (
        <div className="wd-assignments">
            <AssignmentsHeaderControlButtons addAssignment={handleAddAssignment} courseId={cid || ""} />
            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-white">
                    <div className="wd-title p-3 ps-2" style={{ backgroundColor: "#f1f2f3" }}>
                        <BsGripVertical className="me-2 fs-3" />
                        <FaCaretDown className="me-2 fs-3" />
                        ASSIGNMENTS
                        <AllAssignmentsControlButtons />
                    </div>

                    <ul id="wd-assignment" className="list-group rounded-0">
                        {assignments
                            .filter((assignment: any) => assignment.course === cid)
                            .map((assignment: any) => (
                                <AssignmentItem
                                    key={assignment._id}
                                    assignment={assignment}
                                    onDelete={handleDeleteAssignment} 
                                />
                            ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
}

