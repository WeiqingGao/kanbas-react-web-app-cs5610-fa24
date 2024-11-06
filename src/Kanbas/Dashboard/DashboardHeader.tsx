import React from "react";

export default function DashboardHeader({
  addNewCourse,
  updateCourse,
}: {
  addNewCourse: () => void;
  updateCourse: () => void;
}) {
  return (
    <div>
      <h5 className="dashboard-title">
        Dashboard
        <button
          className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse}
        >
          Add
        </button>
        <button
          className="btn btn-warning float-end me-2"
          onClick={updateCourse}
          id="wd-update-course-click"
        >
          Update
        </button>
      </h5>
      <br />
    </div>
  );
}
