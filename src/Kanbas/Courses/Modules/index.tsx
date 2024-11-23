import LessonControlButtons from "./LessonControlButtons";
import ModulesControls from "./ModulesControl";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import * as coursesClient from "../client";
import * as modulesClient from "./client";
import { addModule, editModule, updateModule, deleteModule, setModules } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();
    const fetchModules = async () => {
        const modules = await coursesClient.findModulesForCourse(cid as string);
        dispatch(setModules(modules));
    };
    const createModuleForCourse = async () => {
        if (!cid) return;
        const newModule = { name: moduleName, course: cid };
        const module = await coursesClient.createModuleForCourse(cid, newModule);
        dispatch(addModule(module));
    };
    const removeModule = async (moduleId: string) => {
        await modulesClient.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    };
    const saveModule = async (module: any) => {
        await modulesClient.updateModule(module);
        dispatch(updateModule(module));
    };
    
    useEffect(() => {
        fetchModules();
    }, []);    

    return (
        <div className="wd-modules">
            {/* Wrapping <ModulesControls /> in a full-width container */}
            <div className="row mb-3">
                <ModulesControls 
                    moduleName={moduleName} 
                    setModuleName={setModuleName}
                    addModule={createModuleForCourse}
                />
            </div>

            {/* Modules List */}
            <div className="card">
                <ul id="wd-modules" className="list-group rounded-0">
                    {modules
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
                                                            saveModule({ ...module, editing: false });
                                                    }
                                                }}
                                                defaultValue={module.name}
                                            />
                                        )}
                                    </div>
                                    <ModuleControlButtons 
                                        moduleId={module._id}
                                        deleteModule={(moduleId) => removeModule(moduleId)}
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
