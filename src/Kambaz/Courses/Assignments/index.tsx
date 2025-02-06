import { Button, Col, Container, FormControl, InputGroup, ListGroup, Row} from "react-bootstrap";
import { BsGripVertical, BsPlusLg } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { Link } from "react-router-dom";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { LuNotebookPen } from "react-icons/lu";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Assignments() {
    return (
      <div id="wd-assignments">
        <Container>
          <Container className="p-3 ">
            <Row className="align-items-center">
              <Col xs={6}>
              <InputGroup> 
                <InputGroup.Text>
                  <FaMagnifyingGlass size={16}/>
                </InputGroup.Text>
                <FormControl size="lg" placeholder="Search for Assignments"
                    type="text" />
                  
              </InputGroup>
              </Col>
              <Col className="d-flex justify-content-end gap-2">
                <Button size="lg" variant="secondary"> <BsPlusLg />Group</Button>
              
                <Button size="lg" variant="danger"> <BsPlusLg /> Assignment</Button>
              </Col>
            </Row>
          </Container>
          <div id="wd-assignments-title" className="wd-title p-3 ps-2 bg-secondary"> <BsGripVertical className="me-3 fs-3" />
              ASSIGNMENTS
              40% of Total 
              <AssignmentControlButtons /> 
          </div>
          
        <ListGroup className="rounded-0" id="wd-modules">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
        <ListGroup className="wd-assignment-list rounded-0" >
          <ListGroup.Item style={{ borderLeft: "4px solid green" }} className="wd-assignment-list-item d-flex">
            <div className="d-flex align-items-center me-3"> <BsGripVertical className="me-3 fs-3" /></div>
            <div style={{color:"green"}}className="d-flex align-items-center me-3"> <LuNotebookPen className="me-3 fs-3" /></div>
            <div className="flex-grow-1"> 
              <Link to="/Kambaz/Courses/1234/Assignments/123"
                className="wd-assignment-link" >
                A1 - ENV + HTML
              </Link>
              <p className="mb-0"> Multiple Modules | Not available until May 6 at 12:00am | </p>
              <p className="mb-0"> Due May 13 at 11:59pm | 100 pts </p>
            </div>
            <div className="d-flex align-items-center me-3"> <LessonControlButtons /> </div>
          </ListGroup.Item>
          <ListGroup.Item style={{ borderLeft: "4px solid green" }} className="wd-assignment-list-item d-flex">
            <div className="d-flex align-items-center me-3"> <BsGripVertical className="me-3 fs-3" /></div>
            <div style={{color:"green"}}className="d-flex align-items-center me-3"> <LuNotebookPen className="me-3 fs-3" /></div>
            <div className="flex-grow-1"> 
              <Link to="/Kambaz/Courses/1234/Assignments/245"
                className="wd-assignment-link" >
                A2 - CSS + BOOTSTRAP
              </Link>
              <p className="mb-0"> Multiple Modules | Not available until May 13 at 12:00am | </p>
              <p className="mb-0"> Due May 20 at 11:59pm | 100 pts </p>
            </div>
            <div className="d-flex align-items-center me-3"> <LessonControlButtons /> </div>  
          </ListGroup.Item>
  
          <ListGroup.Item style={{ borderLeft: "4px solid green" }} className="wd-assignment-list-item d-flex"> 
              <div className="d-flex align-items-center me-3"> <BsGripVertical className="me-3 fs-3" /></div>
              <div style={{color:"green"}}className="d-flex align-items-center me-3"> <LuNotebookPen className="me-3 fs-3" /></div>
              <div className="flex-grow-1"> 
                  <Link to="/Kambaz/Courses/1234/Assignments/330"
                    className="wd-assignment-link " >A3 - JAVASCRIPT + REACT
                  </Link>
                  <p className="mb-0"> Multiple Modules | Not available until May 20 at 12:00am | </p>
                  <p className="mb-0">Due May 27 at 11:59pm | 100 pts </p>
              </div>
              <div className="d-flex align-items-center me-3"> <LessonControlButtons /> </div>
          </ListGroup.Item>
        </ListGroup>
        </ListGroup.Item>
        </ListGroup>
        </Container>
      </div>
  );}
  