import  { useState } from "react";
import { Modal, Button, Form, Col, InputGroup, Row } from "react-bootstrap";
import { IoCalendarClearOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateAssignment, addAssignment } from "./reducer";

export default function AssignmentEditor() {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cid, aid } = useParams();
  
  // Get existing assignment if it exists
  const existingAssignment = useSelector((state: any) =>
    state.assignmentsReducer.assignments.find((a: any) => a._id === aid)
  );

  // Local state for assignment fields
  const [assignmentState, setAssignment] = useState(
    existingAssignment || {
      _id: aid || "",  // Set ID if editing
      title: "",
      description: "",
      points: 100,
      dueDate: "2024-05-13T23:59",
      availableFrom: "2024-05-06T00:00",
      availableUntil: "2024-05-20T23:59",
      course: cid,
    }
  );

  // Function to Save Assignment (New or Edited)
  const handleSave = () => {
    if (existingAssignment) {
      dispatch(updateAssignment(assignmentState));
    } else {
      dispatch(addAssignment(assignmentState));
    }
    navigate(`/Kambaz/Courses/${cid}/Assignments`); // Redirect to assignments list
  };

  // Function to Cancel Editing & Close Modal
  const handleCancel = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments`); // Redirect to assignments list
  };

  return (
    <Modal show={true} onHide={handleCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>{existingAssignment ? "Edit Assignment" : "New Assignment"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Assignment Name */}
        <Form.Group className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control
            type="text"
            value={assignmentState.title}
            onChange={(e) => setAssignment({ ...assignmentState, title: e.target.value })}
          />
        </Form.Group>

        {/* Assignment Description */}
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={assignmentState.description}
            onChange={(e) => setAssignment({ ...assignmentState, description: e.target.value })}
          />
        </Form.Group>

        {/* Points */}
        <Form.Group className="mb-3">
          <Form.Label>Points</Form.Label>
          <Form.Control
            type="number"
            value={assignmentState.points}
            onChange={(e) => setAssignment({ ...assignmentState, points: parseInt(e.target.value) })}
          />
        </Form.Group>

        {/* Due Date */}
        <Form.Group className="mb-3">
          <Form.Label>Due Date</Form.Label>
          <InputGroup>
            <Form.Control
              type="datetime-local"
              value={assignmentState.dueDate}
              onChange={(e) => setAssignment({ ...assignmentState, dueDate: e.target.value })}
            />
            <InputGroup.Text><IoCalendarClearOutline /></InputGroup.Text>
          </InputGroup>
        </Form.Group>

        {/* Availability Dates */}
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Available From</Form.Label>
              <InputGroup>
                <Form.Control
                  type="datetime-local"
                  value={assignmentState.availableFrom}
                  onChange={(e) => setAssignment({ ...assignmentState, availableFrom: e.target.value })}
                />
                <InputGroup.Text><IoCalendarClearOutline /></InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Available Until</Form.Label>
              <InputGroup>
                <Form.Control
                  type="datetime-local"
                  value={assignmentState.availableUntil}
                  onChange={(e) => setAssignment({ ...assignmentState, availableUntil: e.target.value })}
                />
                <InputGroup.Text><IoCalendarClearOutline /></InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Col>
        </Row>
      </Modal.Body>

      {/* Footer Buttons */}
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
        <Button variant="danger" onClick={handleSave}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}
