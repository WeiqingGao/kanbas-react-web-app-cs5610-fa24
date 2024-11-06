import { BsGripVertical, BsTrash } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useState } from "react";
import DialogDelete from "./DialogDelete";

interface AssignmentProps {
    assignment: {
        _id: string;
        title: string;
        course: string;
        availableFrom: string;
        dueDate: string;
        availableUntil: string;
        points: number;
    };
    onDelete: (id: string) => void;
}

export default function AssignmentItem({ assignment, onDelete }: AssignmentProps) {
    const [showDialog, setShowDialog] = useState(false);

    const handleConfirmDelete = () => {
        onDelete(assignment._id);
        setShowDialog(false);
    };

    return (
        <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
            {/* 左对齐部分 - 图标 */}
            <div className="d-flex align-items-center justify-content-start" style={{ flex: "2" }}>
                <BsGripVertical className="me-2 fs-3" />
                <FaRegEdit className="me-3 fs-4" />
            </div>

            {/* 中间内容 - 居中显示 */}
            <div className="d-flex align-items-center justify-content-center text-left flex-column assignment-content" style={{ flex: "8" }}>
                <Link
                    className="wd-assignment-link text-dark text-decoration-none"
                    to={`/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}
                >
                    <div className="d-flex flex-column">
                        <span className="assignment-id">{assignment._id}</span>
                        <span className="assignment-title text-danger">
                            {assignment.title}
                            <span className="text-dark fw-bold mx-2">|</span>
                            <span className="fw-bold text-dark">Not available until </span>
                            <span className="text-dark">{assignment.availableFrom}</span>
                            <span className="text-dark fw-bold mx-2">|</span>
                        </span>
                        <span className="assignment-info">
                            <span className="fw-bold text-dark">Due </span>
                            <span className="text-dark">{assignment.dueDate}</span>
                            <span className="text-dark fw-bold mx-2">|</span>
                            <span>{assignment.points} pts</span>
                        </span>
                    </div>
                </Link>
            </div>

            {/* 右对齐部分 - 控制按钮 */}
            <div className="d-flex align-items-center justify-content-end" style={{ flex: "2" }}>
                <LessonControlButtons />
                <BsTrash className="ms-3 fs-4 text-danger" onClick={() => setShowDialog(true)} />
            </div>

            {/* 删除确认对话框 */}
            <DialogDelete 
                show={showDialog} 
                onConfirm={handleConfirmDelete} 
                onCancel={() => setShowDialog(false)} 
            />
        </li>
    );
}
