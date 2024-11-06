import React, { useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import DialogAdd from "./DialogAdd";

interface AssignmentsHeaderControlButtonsProps {
    addAssignment: (assignment: any) => void;
    courseId: string;
}

export default function AssignmentsHeaderControlButtons({ addAssignment, courseId }: AssignmentsHeaderControlButtonsProps) {
    const [showDialog, setShowDialog] = useState(false);

    const handleSave = (assignment: any) => {
        addAssignment(assignment);  
        setShowDialog(false); 
    };

    const handleCancel = () => setShowDialog(false); 

    return (
        <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="input-group" style={{ width: "250px" }}>
                <span className="input-group-text bg-light">
                    <FaSearch />
                </span>
                <input
                    type="text"
                    id="wd-assignment-search"
                    className="form-control"
                    placeholder="Search..."
                />
            </div>

            <div className="d-flex">
                <button id = "wd-assignment-group" className="btn btn-outline-dark btn-lg me-2"
                        style={{ backgroundColor: '#f1f2f3', color: 'black' }}>
                    <FaPlus className="position-relative me-2" /> 
                    Group
                </button>
                <button
                    id="wd-assignment-add"
                    className="btn btn-lg btn-danger me-2"
                    onClick={() => setShowDialog(true)}  
                >
                    <FaPlus className="position-relative me-2" />
                    Assignment
                </button>
            </div>

            {/* DialogAdd Component */}
            <DialogAdd 
                show={showDialog}                
                onSave={handleSave}               
                onCancel={handleCancel}           
                courseId={courseId}               
            />
        </div>
    );
}
