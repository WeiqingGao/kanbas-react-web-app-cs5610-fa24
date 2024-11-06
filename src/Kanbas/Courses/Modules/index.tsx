import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControl";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import { useState } from "react";
import * as db from "../../Database";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();

    return (
        <div className="wd-modules">
            {/* Wrapping <ModulesControls /> in a full-width container */}
            <div className="row mb-3">
                <ModulesControls 
                    moduleName={moduleName} 
                    setModuleName={setModuleName}
                    addModule={() => {
                        dispatch(addModule({ name: moduleName, course: cid }));
                        setModuleName("");
                    }} 
                />
            </div>

            {/* Modules List */}
            <div className="card">
                <ul id="wd-modules" className="list-group rounded-0">
                    {modules
                        .filter((module: any) => module.course === cid)
                        .map((module: any) => (
                            <li key={module._id} className="list-group-item border mb-3">
                                {/* Module Header */}
                                <div className="d-flex align-items-center justify-content-between bg-light p-2 rounded">
                                    <div className="d-flex align-items-center">
                                        <BsGripVertical className="me-2 fs-4" />
                                        {!module.editing && <span className="fs-5">{module.name}</span>}
                                        {module.editing && (
                                            <input 
                                                className="form-control w-50 d-inline-block"
                                                onChange={(e) => 
                                                    dispatch(
                                                        updateModule({ ...module, name: e.target.value })
                                                    )
                                                }
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter") {
                                                        dispatch(
                                                            updateModule({ ...module, editing: false })
                                                        );
                                                    }
                                                }}
                                                defaultValue={module.name}
                                            />
                                        )}
                                    </div>
                                    <ModuleControlButtons 
                                        moduleId={module._id}
                                        deleteModule={(moduleId) => {
                                            dispatch(deleteModule(moduleId));
                                        }}
                                        editModule={(moduleId) => {
                                            dispatch(editModule(moduleId));
                                        }}
                                    />
                                </div>
                                
                                {/* Lessons List */}
                                {module.lessons && (
                                    <ul className="list-group mt-2">
                                        {module.lessons.map((lesson: any) => (
                                            <li key={lesson._id} className="list-group-item d-flex align-items-center p-2">
                                                <BsGripVertical className="me-2 fs-4" />
                                                <span className="flex-grow-1">{lesson.name}</span>
                                                <LessonControlButtons />
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
}
