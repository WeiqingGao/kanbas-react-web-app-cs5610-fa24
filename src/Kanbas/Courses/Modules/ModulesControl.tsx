import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { IoBanOutline } from "react-icons/io5";
import ModuleEditor from "./ModuleEditor";

export default function ModulesControls(
    { moduleName, setModuleName, addModule }:
    { moduleName: string; setModuleName: (title: string) => void; addModule: () => void; }
) {
    return (
        <div id="wd-modules-controls" className="d-flex align-items-center justify-content-end text-nowrap mb-3">
            <button 
                id="wd-add-module-btn" 
                className="btn btn-lg btn-danger me-2 float-end"
                data-bs-toggle="modal" data-bs-target="#wd-add-module-dialog"
                style={{ padding:"12px", fontSize: "24px", width: "200px"}}
            >
                <FaPlus className="me-2" style={{ bottom: "1px" }} />
                Module
            </button>

            <div className="dropdown me-2">
                <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
                        type="button" data-bs-toggle="dropdown"
                        style={{ padding:"12px", fontSize: "24px", width: "200px"}}>
                    <GreenCheckmark />
                    Publish All
                </button>
                <ul className="dropdown-menu">
                    <li>
                        <button id="wd-publish-all-modules-and-items-btn" className="dropdown-item">
                            <GreenCheckmark />
                            Publish all modules and items
                        </button>
                    </li> 
                    <li>
                        <button id="wd-publish-modules-only-button" className="dropdown-item">
                            <GreenCheckmark />
                            Publish modules only
                        </button>
                    </li>
                    <li>
                        <button id="wd-unpublish-all-modules-and-items" className="dropdown-item">
                            <IoBanOutline />
                            Unpublish all modules and items
                        </button>
                    </li>
                    <li>
                        <button id="wd-unpublish-modules-only" className="dropdown-item">
                            <IoBanOutline />
                            Unpublish modules only
                        </button>
                    </li>
                </ul>
            </div>

            <button id="wd-collapse-all-btn" className="btn btn-lg btn-secondary me-2" type="button"
            style={{ padding:"12px", fontSize: "24px", width: "180px"}}>
                Collapse All
            </button>

            <button id="wd-view-progress-btn" className="btn btn-lg btn-secondary me-2" type="button"
            style={{ padding:"12px", fontSize: "24px", width: "180px"}}>
                View Progress
            </button>

            <ModuleEditor 
                dialogTitle="Add Module" 
                moduleName={moduleName}
                setModuleName={setModuleName} 
                addModule={addModule} 
            />
        </div>
    );
}
