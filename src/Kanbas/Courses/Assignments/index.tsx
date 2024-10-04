import { BsGripVertical } from "react-icons/bs";
import AllAssignmentsControlButtons from "./AllAssignmentsControlButtons";
import { FaCaretDown, FaPlus, FaRegEdit, FaSearch } from "react-icons/fa";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
    return (
        <div>
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
                    <button id="wd-assignment-add" className="btn btn-lg btn-danger me-2">
                        <FaPlus className="position-relative me-2"/> 
                        Assignment
                    </button>
                </div>
            </div>

            <ul id="wd-assignments" className="list-group rounded-0">
                <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-white">
                    <div className="wd-title p-3 ps-2" style={{ backgroundColor: '#f1f2f3' }}>
                        <BsGripVertical className="me-2 fs-3" />
                        <FaCaretDown className="me-2 fs-3"/>
                        ASSIGNMENTS
                        <AllAssignmentsControlButtons/>
                    </div>

                    <ul id="wd-assignment" className="list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1
                            d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center me-3">
                                <BsGripVertical className="me-2 fs-3" />
                                <FaRegEdit className="me-3 fs-4" />
                            </div>
                            
                            <a className="wd-assignment-link"
                                   href="#/Kanbas/Courses/1234/Assignments/123">
                                <div className="d-flex flex-column">
                                    <span>A1</span>
                                    <span className="text-danger">
                                        Multiple Modules
                                        <span className="text-dark fw-bold mx-2">|</span>
                                        <span className="fw-bold text-dark">Not available until </span>
                                        <span className="text-dark">May 6 at 12:00am</span>
                                        <span className="text-dark fw-bold mx-2">|</span>
                                    </span>
                                    <span>
                                        <span className="fw-bold text-dark">Due </span>
                                        <span className="text-dark">May 13 at 11:59pm</span>
                                        <span className="text-dark fw-bold mx-2">|</span>
                                        <span>100 pts</span>
                                    </span>
                                </div>
                            </a>
                            <LessonControlButtons />
                        </li>

                        <li className="wd-lesson list-group-item p-3 ps-1
                            d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center me-3">
                                <BsGripVertical className="me-2 fs-3" />
                                <FaRegEdit className="me-3 fs-4" />
                            </div>
                            
                            <div className="d-flex flex-column">
                                <span>A2</span>
                                <span className="text-danger">
                                    Multiple Modules
                                    <span className="text-dark fw-bold mx-2">|</span>
                                    <span className="fw-bold text-dark">Not available until </span>
                                    <span className="text-dark">May 13 at 12:00am</span>
                                    <span className="text-dark fw-bold mx-2">|</span>
                                </span>
                                <span>
                                    <span className="fw-bold text-dark">Due </span>
                                    <span className="text-dark">May 20 at 11:59pm</span>
                                    <span className="text-dark fw-bold mx-2">|</span>
                                    <span>100 pts</span>
                                </span>
                            </div>
                            
                            <LessonControlButtons />
                        </li>

                        <li className="wd-lesson list-group-item p-3 ps-1
                            d-flex align-items-center justify-content-between">
                            <div className="d-flex align-items-center me-3">
                                <BsGripVertical className="me-2 fs-3" />
                                <FaRegEdit className="me-3 fs-4" />
                            </div>
                            
                            <div className="d-flex flex-column">
                                <span>A3</span>
                                <span className="text-danger">
                                    Multiple Modules
                                    <span className="text-dark fw-bold mx-2">|</span>
                                    <span className="fw-bold text-dark">Not available until </span>
                                    <span className="text-dark">May 20 at 12:00am</span>
                                    <span className="text-dark fw-bold mx-2">|</span>
                                </span>
                                <span>
                                    <span className="fw-bold text-dark">Due </span>
                                    <span className="text-dark">May 27 at 11:59pm</span>
                                    <span className="text-dark fw-bold mx-2">|</span>
                                    <span>100 pts</span>
                                </span>
                            </div>
                            
                            <LessonControlButtons />
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}