import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { RootState } from "../../store";
import { Assignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const [editedAssignment, setEditedAssignment] = useState<Assignment>(assignment);

  const handleSave = async () => {
    if (isEdit) {
      await dispatch(updateAssignment(editedAssignment));
    } else {
      await dispatch(addAssignment(editedAssignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container">
      <div className="m-4">
        <label htmlFor="wd-name" id="wd-assignment-name" className="fw-bolder fs-5">
          Assignment Name
        </label>
        <div className="mb-3">
          <input
            id="wd-name"
            className="form-control"
            value={editedAssignment.title}
            onChange={(e) =>
              setEditedAssignment({
                ...editedAssignment,
                title: e.target.value,
              })
            }
          />
        </div>
      </div>

      <div className="mb-3 border m-4">
        <textarea
          id="wd-description"
          className="form-control"
          rows={5}
          value={editedAssignment.description}
          onChange={(e) =>
            setEditedAssignment({
              ...editedAssignment,
              description: e.target.value,
            })
          }
        />
      </div>

      <div id="wd-assignments-editor-details">
        <div className="row align-items-center m-4 justify-content-end">
          <div className="col-auto">
            <label htmlFor="wd-points" className="form-label">Points</label>
          </div>
          <div className="col-md-6">
            <input
              id="wd-points"
              type="number"
              className="form-control"
              value={editedAssignment.points}
              onChange={(e) =>
                setEditedAssignment({
                  ...editedAssignment,
                  points: parseInt(e.target.value),
                })
              }
            />
          </div>
        </div>

        {/* Due Date */}
        <div className="row align-items-start m-4 justify-content-end">
          <div className="col-auto align-top">
            <label htmlFor="wd-assign-details" className="form-label">Assign</label>
          </div>
          <div
            id="wd-assign-details"
            className="col-md-6"
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "5px",
            }}
          >
            <div className="col-md-6 m-2">
              <label htmlFor="wd-due-date" className="form-label">Due</label>
              <input
                type="date"
                id="wd-due-date"
                className="form-control"
                value={editedAssignment.dueDate}
                onChange={(e) =>
                  setEditedAssignment({
                    ...editedAssignment,
                    dueDate: e.target.value,
                  })
                }
              />
            </div>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="wd-available-from" className="form-label">Available from</label>
                <input
                  type="date"
                  id="wd-available-from"
                  className="form-control"
                  value={editedAssignment.availableFrom}
                  onChange={(e) =>
                    setEditedAssignment({
                      ...editedAssignment,
                      availableFrom: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="wd-available-until" className="form-label">Until</label>
                <input
                  type="date"
                  id="wd-available-until"
                  className="form-control"
                  value={editedAssignment.availableUntil}
                  onChange={(e) =>
                    setEditedAssignment({
                      ...editedAssignment,
                      availableUntil: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 float-end">
          <button className="btn btn-secondary me-2" onClick={handleCancel}>Cancel</button>
          <button className="btn btn-primary" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}
