export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label><br /><br />
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description" cols={50} rows={10}>
        The assignment is available online. 
        
        Submit a link to the landing page of your web application running 
        on Netlify. 
        
        The landing page should include the following:
        Your full name and section
        Links to each of the lab assignments 
        Link to the Kanbas application.
        Links to all relevant source code repositiories 
        
        The Kanbas application should include a link to navigate back to the landing page.
      </textarea>
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
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="Percentage">Percentage</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="Online">Online</option>
            </select>
          </td>
        </tr>
        <br/>
            <td>
            <br/>
              <label>Online Entry Options </label><br/>

              <input type="checkbox" name="check-entry-options" id="wd-text-entry"/>
              <label htmlFor="wd-text-entry">Text Entry</label><br/>

              <input type="checkbox" name="check-entry-options" id="wd-website-url"/>
              <label htmlFor="wd-website-url">Website URL</label><br/>

              <input type="checkbox" name="check-entry-options" id="wd-media-recordings"/>
              <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

              <input type="checkbox" name="check-entry-options" id="wd-student-annotation"/>
              <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

              <input type="checkbox" name="check-entry-options" id="wd-file-upload"/>
              <label htmlFor="wd-file-upload">File Uploads</label><br/>  
            </td>
            <br/>
            <tr>
              <td align="right" >
                <label style={{display: 'flex', alignContent: 'right', justifyContent:'right' }} 
                htmlFor="wd-assign-to"> Assign Assign To</label>
                <input id="wd-assign-to" value={"Everyone"}/>
              </td> 
            </tr>
            <br/>
            <td> 
                <label style={{display: 'flex', textAlign: 'right', alignContent: 'right', alignItems: 'right'}} 
                htmlFor="wd-due-date"> Due </label>
                <input type="date"
                value="2024-05-13"
                id="wd-due-date"/><br/>
            </td>
            <tr>
                <label 
                htmlFor="wd-available-from"> Available From </label>
                <input type="date"
                value="2024-05-13"
                id="wd-available-from"/>
             
                <label htmlFor="wd-available-until"> Available Until </label>
                <input type="date"
                value="2024-05-13"
                id="wd-available-until"/><br/>
            </tr><b/>
            <tr> 
            <hr style={{ width: '100%', border: '1px solid black', margin: 0, position:'absolute'}}/>
            <div className="flex justify-end p-5">
              <b/>
              <button style={{marginLeft:'30px'}} type="button"
                id="wd-name">
                Cancel
              </button>
              &nbsp;
              <button type="button"
                id="wd-name">
                Save
              </button>
            </div>
            </tr>
      </table>
    </div>
);}

  