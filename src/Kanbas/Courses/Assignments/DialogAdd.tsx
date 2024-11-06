import React, { useState } from "react";

interface DialogAddProps {
    show: boolean;
    onSave: (assignment: any) => void;
    onCancel: () => void;
    courseId: string;
}

export default function DialogAdd({ show, onSave, onCancel, courseId }: DialogAddProps) {
    const [assignmentName, setAssignmentName] = useState("");
    const [description, setDescription] = useState("");
    const [points, setPoints] = useState<number | "">("");
    const [dueDate, setDueDate] = useState("");
    const [availableFrom, setAvailableFrom] = useState("");
    const [availableUntil, setAvailableUntil] = useState("");

    const handleSave = () => {
        const newAssignment = {
            _id: `A${new Date().getTime()}`, 
            title: assignmentName,
            description,
            points: points === "" ? 100 : points, // 默认分数为0
            dueDate,
            availableFrom,
            availableUntil,
            course: courseId,
        };
        onSave(newAssignment); // 调用传入的 onSave 函数
        resetForm(); // 保存后重置表单
    };

    const resetForm = () => {
        setAssignmentName("");
        setDescription("");
        setPoints("");
        setDueDate("");
        setAvailableFrom("");
        setAvailableUntil("");
    };

    if (!show) return null;

    return (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "1200px"}}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">Add Assignment</h1>
                        <button type="button" className="btn-close" onClick={onCancel}></button>
                    </div>
                    <div className="modal-body">
                        {/* Assignment Name */}
                        <div className="mb-3">
                            <label htmlFor="assignment-name">Assignment Name</label>
                            <input
                                id="assignment-name"
                                className="form-control"
                                value={assignmentName}
                                placeholder="New Assignment"
                                onChange={(e) => setAssignmentName(e.target.value)}
                            />
                        </div>

                        {/* Description */}
                        <div className="mb-3">
                            <textarea
                                id="assignment-description"
                                className="form-control"
                                placeholder="New Assignment Description"
                                rows={5}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>

                        

                        {/* Assign Part */}
                        <div className="row mb-3">
                            {/* Points */}
                            <div className="col-md-3 text-end">
                                <label htmlFor="assignment-points">Points</label>
                            </div>
                            <div className="col-md-9">
                                <input
                                    id="assignment-points"
                                    type="number"
                                    className="form-control"
                                    defaultValue={100}
                                    onChange={(e) => setPoints(e.target.value ? parseInt(e.target.value) : "")}
                                />
                            </div>
                            {/* Assign */}
                            <div className="col-md-3 text-end">
                                <label>Assign</label>
                            </div>
                            <div className="col-md-9">
                                <div className="border p-3">
                                    {/* Due Date */}
                                    <div className="mb-3">
                                        <label htmlFor="wd-due-date">Due</label>
                                        <input
                                            type="date"
                                            name="due-date"
                                            id="wd-due-date"
                                            className="form-control"
                                        />
                                    </div>

                                    {/* Available */}
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <label htmlFor="wd-available-from">Available from</label>
                                            <input
                                                type="date"
                                                name="earliest-available-date"
                                                id="wd-available-from"
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label htmlFor="wd-available-until">Until</label>
                                            <input
                                                type="date"
                                                name="latest-available-date"
                                                id="wd-available-until"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onCancel}>
                            Cancel
                        </button>
                        <button type="button" className="btn btn-danger" onClick={handleSave}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
