export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container">
            <div className="mb-3">
                <label htmlFor="wd-name">Assignment Name</label>
                <input id="wd-name" className="form-control" value="A1 - ENV + HTML" />
            </div>

            <div className="mb-3">
                <label htmlFor="wd-description">Description</label>
                <textarea id="wd-description" className="form-control" rows={5}>
                    The assignment is available online Submit a link to the landing page of your Web
                    application running on Netlify. The landing page should include the following:
                    Your full name and section links to each of the lab assignments Link to the
                    Kanbas application
                </textarea>
            </div>

            <div className="row mb-3">
                <div className="col-md-2">
                    <label htmlFor="wd-points">Points</label>
                </div>
                <div className="col-md-10">
                    <input id="wd-points" className="form-control" value={100} />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-2">
                    <label htmlFor="wd-assignment-group">Assignment Group</label>
                </div>
                <div className="col-md-10">
                    <select id="wd-assignment-group" className="form-control">
                        <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                        <option value="QUIZZES">QUIZZES</option>
                        <option value="EXAMS">EXAMS</option>
                        <option value="PROJECT">PROJECT</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-2">
                    <label htmlFor="wd-assignment-display-grade-as">Display Grade as</label>
                </div>
                <div className="col-md-10">
                    <select id="wd-assignment-display-grade-as" className="form-control">
                        <option selected value="PERCENTAGE">Percentage</option>
                        <option value="LETTER">Letter</option>
                        <option value="NUMERICAL">Numerical</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-2">
                    <label htmlFor="wd-submission-type">Submission Type</label>
                </div>
                <div className="col-md-10">
                    <div className="border p-3">
                        <div className="mb-3">
                            <select id="wd-submission-type" className="form-control">
                                <option selected value="ONLINE">Online</option>
                                <option value="INPERSON">In person</option>
                            </select>
                        </div>
                        <label>Online Entry Options</label>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="wd-text-entry"
                                name="online-entry-option"
                            />
                            <label className="form-check-label" htmlFor="wd-text-entry">
                                Text Entry
                            </label>
                        </div>

                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="wd-website-url"
                                name="online-entry-option"
                            />
                            <label className="form-check-label" htmlFor="wd-website-url">
                                Website URL
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="wd-media-recordings"
                                name="online-entry-option"
                            />
                            <label className="form-check-label" htmlFor="wd-media-recordings">
                                Media Recording
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="wd-student-annotation"
                                name="online-entry-option"
                            />
                            <label className="form-check-label" htmlFor="wd-student-annotation">
                                Student Annotation
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="wd-file-upload"
                                name="online-entry-option"
                            />
                            <label className="form-check-label" htmlFor="wd-file-upload">
                                File Uploads
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-2">
                    <label>Assign</label>
                </div>
                <div className="col-md-10">
                    <div className="border p-3">
                        <div className="mb-3">
                            <label htmlFor="wd-assign-to">Assign to</label>
                            <input id="wd-assign-to" className="form-control" value="Everyone" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="wd-due-date">Due</label>
                            <input
                                type="date"
                                name="due-date"
                                id="wd-due-date"
                                className="form-control"
                                defaultValue="2024-05-13"
                            />
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="wd-available-from">Available from</label>
                                <input
                                    type="date"
                                    name="earliest-available-date"
                                    id="wd-available-from"
                                    className="form-control"
                                    defaultValue="2024-05-06"
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="wd-available-until">Until</label>
                                <input
                                    type="date"
                                    name="latest-available-date"
                                    id="wd-available-until"
                                    className="form-control"
                                    defaultValue="2024-05-20"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            {/* Buttons */}
            <div className="float-end">
                <button className="btn btn-secondary me-2">Cancel</button>
                <button className="btn btn-danger">Save</button>
            </div>
        </div>
    );
}
