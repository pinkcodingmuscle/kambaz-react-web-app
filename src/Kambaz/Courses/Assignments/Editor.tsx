import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { IoCalendarClearOutline } from "react-icons/io5";

export default function AssignmentEditor() {
    return (
      <Container className=" mt-4"> 
      <div id="wd-assignments-editor" >
      
      <Form.Group className="mb-3" controlId="wd-name"> 
        <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
        <div style={{ width: "100%"}}> 
        <Form.Control id="wd-name" value="A1 - ENV + HTML" />
        </div>
      </Form.Group>
      
      {/* Assignment editor box */}
      <Form.Group style={{width: "100%"}}>
      < Form.Control className="mb-3" as="textarea" id="wd-description" rows={8} 
              value="The assignment is available online. 
        
        Submit a link to the landing page of your web application running 
        on Netlify. 
        
        The landing page should include the following:
        Your full name and section
        Links to each of the lab assignments 
        Link to the Kanbas application.
        Links to all relevant source code repositiories 
        
        The Kanbas application should include a link to navigate back to the landing page."/>
  
      </Form.Group>


      {/* Points Field */}
      <Form.Group as={Row} className="mb-3 justify-content-end ">
        <Form.Label column sm={3} className="text-end">
          Points
        </Form.Label>
        <Col sm={7}>
          <Form.Control type="text" value={100} />
        </Col>
      </Form.Group>

      {/* Assignment Group Field */}
      <Form.Group as={Row} className="mb-3 justify-content-end ">
        <Form.Label column sm={3} className="text-end" >
          Assignment Group
        </Form.Label>
        <Col sm={7}>
          <Form.Select defaultValue="ASSIGNMENTS"> 
            <option value="ASSIGNMENTS" > ASSIGNMENTS</option>
          </Form.Select>
        </Col>
      </Form.Group>

      {/* Grade Display */}
      <Form.Group as={Row} className="mb-3 justify-content-end ">
        <Form.Label column sm={3} className="text-end" >
          Display Grade as
        </Form.Label>
        <Col sm={7}>
          <Form.Select defaultValue="Percentage"> 
            <option value="Percentage" > Percentage</option>
          </Form.Select>
        </Col>
      </Form.Group>

      {/* Submission type */}
      
      
      <Form.Group as={Row} className="mb-3 justify-content-end">
        <Form.Label column sm={3} className="text-end" >
          Submission Type
        </Form.Label>
        <div  className="border rounded p-4 w-50" style={{width:"50vw",  height:"20vw"}}> 
        <div > 
          <Col sm={15}>
            <Form.Select defaultValue="Online"> 
              <option value="Online" > Online</option>
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
      
      {/* Assign portion */}
      <Container as={Row} className="mb-3 justify-content-end">
        <Form.Label column sm={3} className="text-end" >
          Assign
        </Form.Label>
        <div  className="border rounded p-4 w-50" style={{width:"50vw",  height:"20vw"}}> 
        <div >
        <Form.Label><strong>Assign To</strong></Form.Label> 
          <Col sm={15}>
            <Form.Select defaultValue="Everyone"> 
              <option value="Everyone" > Everyone</option>
            </Form.Select>
          </Col>
        </div>
        <Form.Group className="mb-3 p-3">
          <Form.Label><strong>Due</strong></Form.Label>
          <InputGroup>
            <Form.Control defaultValue="May 13, 2024 11:59PM" type="date" id="wd-dob"/>
              <InputGroup.Text>
                <IoCalendarClearOutline size={16}/>
              </InputGroup.Text>
          </InputGroup>
          <div className="d-flex gap-3 p-3">
          <Row>
            <Col md={6}>
              <Form >
                <Form.Group>
                  <Form.Label>Available From</Form.Label>
                  <InputGroup> 
                  <Form.Control type="text" placeholder="May 13, 2024 11:59PM" />
                  <InputGroup.Text>
                    <IoCalendarClearOutline size={16}/>
                  </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Form>
            </Col>

            <Col md={6}>
              <Form >
                <Form.Group>
                  <Form.Label>Available Until</Form.Label>
                  <InputGroup> 
                  <Form.Control type="date"  />
                  <InputGroup.Text>
                    <IoCalendarClearOutline size={16}/>
                  </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
                
              </Form>
            </Col>
          </Row>
            
          </div>
          </Form.Group>
        </div>
      </Container>
              
      <hr style={{ border: '1px solid black'}}/> 
      <Container>
        <Row>
          <Col fluid className="d-flex justify-content-end gap-2">
          <Button variant="secondary"> Cancel </Button>
          <Button variant="danger"> Save </Button>
          </Col>
        </Row>
      </Container>
            
    </div>
    </Container>
);}

  