export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description" cols={50} rows={5} >
                The assignment is available online Submit a link to the landing page of
            </textarea><br />
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td> 
                </tr>
                <br/>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assignment-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-assignment-group">
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option selected value="QUIZZES">QUIZZES</option>
                            <option selected value="EXAMS">EXAMS</option>
                            <option selected value="PROJECT">PROJECT</option>
                        </select>
                    </td> 
                </tr>
                <br/>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assignment-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-assignment-display-grade-as">
                            <option selected value="PERCENTAGE">Percentage</option>
                            <option selected value="LETTER">Letter</option>
                            <option selected value="NUMBERICAL">Numberical</option>
                        </select>
                    </td> 
                </tr><br/>
                <tr>
                    <td></td>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assignment-online-entry">Online Entry Options</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="checkbox" id="text-entry" name="online-entry-option"/>
                        <label htmlFor="wd-assignment-text-entry">Text Entry</label><br/>
                        <input type="checkbox" id="website-url" name="online-entry-option"/>
                        <label htmlFor="wd-assignment-website-url">Website URL</label><br/>
                        <input type="checkbox" id="media-recording" name="online-entry-option"/>
                        <label htmlFor="wd-assignment-media-recording">Media Recording</label><br/>
                        <input type="checkbox" id="student-annotation" name="online-entry-option"/>
                        <label htmlFor="wd-assignment-student-annotation-">Student Annotation</label><br/>
                        <input type="checkbox" id="file-uploads" name="online-entry-option"/>
                        <label htmlFor="wd-assignment-file-uploads">File Uploads</label>
                    </td> 
                </tr><br/>
                <tr>
                    <td align="right">
                        <label>Assign</label>
                    </td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-assignment-assign-to">Assign to</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td align="right" valign="top">
                        <input id="wd-assignment-assign-to" value={"Everyone"} />
                    </td>
                </tr><br/>
                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-assignment-due">Due</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="date" name="due-date" id="wd-assignment-due">
                        </input>
                    </td> 
                </tr><br/>
                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-assignment-available-from">Available from</label>
                    </td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-assignment-available-until">Until</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <input type="date" name="earliest-available-date" id="wd-assignment-available-from">
                        </input>
                    </td>
                    <td>
                        <input type="date" name="latest-available-date" id="wd-assignment-available-until">
                        </input>
                    </td>
                </tr>
            </table>
            <hr />
            <table width="100%">
                <tr>
                    <td align="right">
                        <button>Cancel</button><button>Save</button>
                    </td>
                </tr>
            </table>
        </div>
    );
}