export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description" cols={50} rows={5} >
                The assignment is available online Submit a link to the landing page of your Web
                application running on Netlify. The landing page should include the following: Your 
                full name and section links to each of the lab assignments Link to the Kanbas 
                application 
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
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option selected value="ONLINE">Online</option>
                            <option selected value="INPERSON">In person</option>
                        </select>
                    </td>
                </tr><br/>
                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-text-entry">Online Entry Options</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type="checkbox" id="wd-text-entry" name="online-entry-option"/>
                        <label htmlFor="wd-text-entry">Text Entry</label><br/>
                        <input type="checkbox" id="wd-website-url" name="online-entry-option"/>
                        <label htmlFor="wd-website-url">Website URL</label><br/>
                        <input type="checkbox" id="wd-media-recordings" name="online-entry-option"/>
                        <label htmlFor="wd-media-recordings">Media Recording</label><br/>
                        <input type="checkbox" id="wd-student-annotation" name="online-entry-option"/>
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
                        <input type="checkbox" id="wd-file-upload" name="online-entry-option"/>
                        <label htmlFor="wd-file-upload">File Uploads</label>
                    </td> 
                </tr><br/>
                <tr>
                    <td align="right">
                        <label>Assign</label>
                    </td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-assign-to">Assign to</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td align="right" valign="top">
                        <input id="wd-assign-to" value={"Everyone"} />
                    </td>
                </tr><br/>
                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-due-date">Due</label>
                    </td>
                </tr> 
                <tr>
                    <td></td>
                    <td>
                        <input type="date" name="due-date" id="wd-due-date" defaultValue="2024-05-13">
                        </input>
                    </td> 
                </tr><br/>
                <tr> 
                    <td></td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-available-from">Available from</label>
                    </td>
                    <td align="left" valign="top">
                        <label htmlFor="wd-available-until">Until</label>
                    </td>
                </tr>
                <tr>
                    <td></td>
                    <td align="left" valign="top">
                        <input type="date" name="earliest-available-date" id="wd-available-from" defaultValue="2024-05-06">
                        </input>
                    </td>
                    <td>
                        <input type="date" name="latest-available-date" id="wd-available-until" defaultValue="2024-05-20">
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