import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { IoCalendarClearOutline } from "react-icons/io5";
import * as db from "../../Database";
import { Link, useParams } from "react-router";


export default function AssignmentEditor() {
  const {cid,aid} = useParams();
  const assignment = db.assignments.find((assignment: any) =>  assignment._id  === aid);

    return (
      <div id="wd-assignments-editor">
        
        <Form.Group className="mb-3" controlId="wd-name">
          <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
          <div style={{ width: "40%"}}> 
            <Form.Control id="wd-name" value={assignment?.title} />
          </div>
        </Form.Group>

      {/* Assignment editor box */}
      <Form.Group style={{ width: "100%" }}>
        <Form.Control className="mb-3 form-control" as="textarea" id="wd-description" rows={8} 
          value={assignment?.description}/>
      </Form.Group>

      <Container>
      {/* Points Field */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3} className="text-end"> Points </Form.Label>
        <Col sm={7}>
          <Form.Control type="text" value="100" />
        </Col>
      </Form.Group>

      {/* Assignment Group Field */}
      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3} className="text-end"> Assignment Group </Form.Label>
        <Col sm={7}>
          <Form.Select defaultValue="Assignment">
          <option value="Assignment">Assignment</option>
            <option value="Homework">Formative: Homework</option>
            <option value="Group Project">Group Project</option>
            <option value="Quiz">Quiz</option>
            <option value="Practicum">Practicum</option>
          </Form.Select>
        </Col>
      </Form.Group>

      {/* Grade Display */}
      <Form.Group as={Row} className="mb-3 ">
        <Form.Label column sm={3} className="text-end"> Display Grade as </Form.Label>
        <Col sm={7}>
          <Form.Select defaultValue="Percentage"> 
            <option value="Percentage">Percentage</option>
            <option value="Percentage">Points</option>
            <option value="Percentage">Complete/Incomplete</option>
            <option value="Percentage">Letter Grade</option>
            <option value="Percentage">GPA Scale</option>
            <option value="Percentage">Not Graded</option>
          </Form.Select>
        </Col>
      </Form.Group>

{/* Submission Type */}
<Form.Group as={Row} className="mb-3">
  <Form.Label column sm={3} className="text-end"> Submission Type </Form.Label>
  <div className="border rounded p-4 w-50" style={{ width: "50vw", height: "20vw" }}> 
    <div> 
      <Col sm={15}>
        <Form.Select defaultValue="Online"> 
          <option value="Online">Online</option>
        </Form.Select>
      </Col>
    </div>
    <Form.Group className="mb-3 p-3">
      <Form.Label><strong>Online Entry Options</strong></Form.Label>
      <div className="d-flex flex-column p-3">
        <Form.Check type="checkbox" label="Text Entry" />
        <Form.Check type="checkbox" label="Website URL" />
        <Form.Check type="checkbox" label="Media Recordings" />
        <Form.Check type="checkbox" label="Student Annotation" />
        <Form.Check type="checkbox" label="File Uploads" />
      </div>
    </Form.Group>
  </div>
</Form.Group>

{/* Assign Portion */}

  <Form.Label column sm={3} className="text-end"> Assign </Form.Label>
  <Container className="border rounded p-4 w-50" style={{ width: "50vw", height: "20vw" }}> 
    <div>
      <Form.Label><strong>Assign To</strong></Form.Label> 
      <Col sm={15}>
        <Form.Select defaultValue="Everyone"> 
          <option value="Everyone">Everyone</option>
        </Form.Select>
      </Col>
    </div>
    <Form.Group className="mb-3 p-3">
      <Form.Label><strong>Due</strong></Form.Label>
      <InputGroup>
        <Form.Control defaultValue="May 13, 2024 11:59PM" type="date" id="wd-dob" />
        <InputGroup.Text>
          <IoCalendarClearOutline size={16}/>
        </InputGroup.Text>
      </InputGroup>
      <div className="d-flex gap-3 p-3">
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Available From</Form.Label>
              <InputGroup> 
                <Form.Control type="text" placeholder="May 13, 2024 11:59PM" />
                <InputGroup.Text>
                  <IoCalendarClearOutline size={16}/>
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Available Until</Form.Label>
              <InputGroup> 
                <Form.Control type="date" />
                <InputGroup.Text>
                  <IoCalendarClearOutline size={16}/>
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
      </div>
    </Form.Group>
  </Container>
</Container>


<hr style={{ border: '1px solid black' }} /> 
<Container>
  <Row>
    <Col className="d-flex justify-content-end gap-2">
      <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary">Cancel</Link>
      <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-danger">Save</Link>
    </Col>
  </Row>
</Container>


  </div>
);}

  