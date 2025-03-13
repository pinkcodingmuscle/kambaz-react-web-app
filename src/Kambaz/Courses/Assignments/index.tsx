import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Col, Container, FormControl, InputGroup, ListGroup, Row } from "react-bootstrap";
import { BsGripVertical, BsPlusLg, BsPencil, BsTrash } from "react-icons/bs";
import { LuNotebookPen } from "react-icons/lu";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { deleteAssignment } from "./reducer";
//import AssignmentControlButtons from "./AssignmentControlButtons";
//import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cid } = useParams();
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);

  // Default values for missing fields
  const defaultDueDate = "May 13, 2024 11:59 PM";
  const defaultAvailableFrom = "May 6, 2024 12:00 AM";
  const defaultPoints = 100;

  return (
    <div id="wd-assignments">
      <Container>
        <Container className="p-3">
          <Row className="align-items-center">
            <Col xs={6}>
              <InputGroup>
                <InputGroup.Text>
                  <FaMagnifyingGlass size={16} />
                </InputGroup.Text>
                <FormControl size="lg" placeholder="Search for Assignments" type="text" />
              </InputGroup>
            </Col>
            <Col className="d-flex justify-content-end gap-2">
              <Button size="lg" variant="secondary">
                <BsPlusLg /> Group
              </Button>
              <Button onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/new`)} size="lg" variant="danger">
                <BsPlusLg /> Assignment
              </Button>
            </Col>
          </Row>
        </Container>
        <div id="wd-assignments-title" className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-3 fs-3" />
          ASSIGNMENTS 40% of Total
        </div>

        <ListGroup className="wd-assignment-list rounded-0">
          {assignments
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
              <ListGroup.Item key={assignment._id} className="wd-assignment-list-item d-flex align-items-center">
                
                {/* Drag Icon */}
                <div className="me-3">
                  <BsGripVertical className="fs-3" />
                </div>
                
                {/* Notebook Icon */}
                <div className="me-3" style={{ color: "green" }}>
                  <LuNotebookPen className="fs-3" />
                </div>

                {/* Assignment Details */}
                <div className="flex-grow-1">
                  {/* Clicking Title Navigates to AssignmentEditor */}
                  <Link to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link">
                    {assignment.title}
                  </Link>
                  
                  <p className="mb-0">Multiple Modules | Not available until 
                    {assignment.availableFrom ? new Date(assignment.availableFrom).toLocaleDateString() : defaultAvailableFrom} 
                    at 
                    {assignment.availableFrom ? new Date(assignment.availableFrom).toLocaleTimeString() : "12:00 AM"} | 
                  </p>
                  <p className="mb-0">
                    Due 
                    {assignment.dueDate ? new Date(assignment.dueDate).toLocaleDateString() : defaultDueDate} 
                    at 
                    {assignment.dueDate ? new Date(assignment.dueDate).toLocaleTimeString() : "11:59 PM"} | 
                    {assignment.points ? assignment.points : defaultPoints} pts 
                  </p>
                </div>

                {/* Control Buttons - Edit & Delete */}
                <div className="d-flex align-items-center">
                  {/* Edit Button (Pencil) */}
                  <Button variant="link" onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`)}>
                    <BsPencil className="text-primary fs-5" />
                  </Button>
                  
                  {/* Delete Button (Trash) */}
                  <Button variant="link" onClick={() => dispatch(deleteAssignment(assignment._id))}>
                    <BsTrash className="text-danger fs-5" />
                  </Button>
                </div>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Container>
    </div>
  );
}
