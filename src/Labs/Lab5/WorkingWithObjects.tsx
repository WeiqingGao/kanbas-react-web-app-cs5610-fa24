import React, { useState } from "react";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const [module, setModule] = useState({
        id: "cs5610_a5_3.3.4_object",
        name: "my own object",
        description: "this is an amazing new object",
        course: "web development",
    });

    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
    
    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>

            <h4>Modifying Properties</h4>
            <a 
                id="wd-update-assignment-title"
                className="btn btn-primary float-end"
            href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
            >
                Update Title
            </a>
            <input 
                className="form-control w-75" 
                id="wd-assignment-title"
                defaultValue={assignment.title} onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })
                }
            />
            <hr />

            {/* get the whole object */}
            <h4>Retrieving Objects</h4>
            <a
                id="wd-retrieve-assignments"
                className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment`}
            >
                Get Assignment
            </a>
            <hr />

            {/* get the single attribute of this object (title) */}
            <h4>Retrieving Properties</h4>
            <a
                id="wd-retrieve-assignment-title"
                className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/title`}
            >
                Get Title
            </a>
            <hr />

            {/* Module: Get and Update */}
            <h4>Module Object</h4>
            <a className="btn btn-primary" href={`${MODULE_API_URL}`}>
                Get Module
            </a>
            <a className="btn btn-primary" href={`${MODULE_API_URL}/name`}>
                Get Module Name
            </a>
            <input
                className="form-control w-50"
                value={module.name}
                onChange={(e) => setModule({ ...module, name: e.target.value })}
            />
            <a className="btn btn-primary" href={`${MODULE_API_URL}/name/${module.name}`}>
                Update Module Name
            </a>
            <input
                className="form-control w-50 mt-2"
                value={module.description}
                onChange={(e) => setModule({ ...module, description: e.target.value })}
            />
            <a className="btn btn-primary" href={`${MODULE_API_URL}/description/${module.description}`}>
                Update Module Description
            </a>
            <hr />
        </div>
  );
}
