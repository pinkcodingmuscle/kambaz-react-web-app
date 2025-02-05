// import { Button, Dropdown } from "react-bootstrap";
import ModulesControls from "./ModulesControls"
import ListGroup from "react-bootstrap/ListGroup";
import { BsGripVertical } from "react-icons/bs";
export default function Modules() {
    return (
      <div> 
        <ModulesControls /><br /><br /><br /><br />

        <ListGroup className="rounded-0" id="wd-modules">
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ListGroup className="wd-content">
                  <ListGroup.Item className="wd-content-item">Introduction to the course</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Learn what is Web Development</ListGroup.Item>
                </ListGroup>
                <span className="wd-title">READING</span>
                <ListGroup className="wd-content">
                  <ListGroup.Item className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User</ListGroup.Item>
                </ListGroup>
                <span className="wd-title">SLIDES</span>
                <ListGroup className="wd-content">
                  <ListGroup.Item className="wd-content-item">Introduction to Web Development</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Creating an HTTP server with Node.js</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Creating aa React Application</ListGroup.Item>
                </ListGroup>  
              </ListGroup.Item>
            </ListGroup>
            <div className="wd-title p-3 ps-2 bg-secondary">Week 1, Lecture 2 - Formatting User Interfaces With HTML</div>
            <ListGroup className="wd-lessons rounded-0">
              <ListGroup.Item className="wd-lesson p-3 ps-1">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ListGroup className="wd-content">
                  <ListGroup.Item className="wd-content-item">Learn how to create user interfaces with HTML</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Deploy the assignment to Netlify</ListGroup.Item>
                </ListGroup>
                <span className="wd-title">SLIDES</span>
                <ListGroup className="wd-content">
                  <ListGroup.Item className="wd-content-item">Introduction to HTML and the DOM</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Formatting Web Content with Headings and</ListGroup.Item>
                  <ListGroup.Item className="wd-content-item">Formatting Content with Lists and Tables</ListGroup.Item>
                </ListGroup>  
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">Week 2</div>
            <span className="wd-title">LEARNING OBJECTIVES</span>
            <span className="wd-title">LESSON 1</span>
            <span className="wd-title">LESSON 2</span>
          </ListGroup.Item>
          <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">Week 3</div>
            <span className="wd-title">LEARNING OBJECTIVES</span>
            <span className="wd-title">LESSON 1</span>
            <span className="wd-title">LESSON 2</span>
          </ListGroup.Item>
        </ListGroup>
      </div>
      
  );}
  