import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addNewAssignment, updateAssignment } from "./reducer";
import { RootState, AppDispatch } from "../../store"; 
import { Assignment } from "./reducer";
import { useDispatch } from "react-redux";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch(); 

  const assignments = useSelector((state: RootState) => state.assignmentsReducer.assignments);

  const isEdit = assignments.some((a: Assignment) => a._id === aid);
  const assignment: Assignment = assignments.find((a: Assignment) => a._id === aid) || {
    _id: aid || "",
    title: "New Assignment",
    description: "New Description",
    points: 100,
    course: cid || "",
    dueDate: "2024-05-13",
    availableFrom: "2024-05-06",
    availableUntil: "2024-05-15",
  };

  const handleSave = async () => {
    if (isEdit) {
      await dispatch(updateAssignment(assignment));
    } else {
      await dispatch(addNewAssignment(assignment)); 
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div>
      {/* Assignment Editor UI */}
    </div>
  );
}
