import { ListGroup } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import '../styles.css';
//import { courses } from "../Database";

export default function CourseNavigation() {
  const {cid}= useParams();
 // const course = courses.find((course) => course._id === cid);
  // const cid = params.cid as string
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const { pathname } = useLocation();
  return (

    <ListGroup id="wd-courses-navigation" className="wd fs-5 rounded-0">
      {links.map((link) => (
        <ListGroup.Item className="border-0 text-danger bg-white" active={pathname.includes(link)} as={Link} to={`/Kambaz/Courses/${cid}/${link}`}>
            <br />
            {link}
          </ListGroup.Item>
      ))}
  
      {/* <Link to="/Kambaz/Courses/1234/Home" id="wd-course-home-link"
        className="list-group-item active border border-0">Home</Link>
      <Link to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link"
        className="list-group-item text-danger border border-0">Modules</Link>
      <Link to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link"
        className="list-group-item text-danger border border-0">Piazza</Link>
      <Link to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link"
        className="list-group-item text-danger border border-0">Zoom</Link>
      <Link to="/Kambaz/Courses/1234/Assignments" id="wd-course-quizzes-link"
        className="list-group-item text-danger border border-0"> Assignments</Link>
      <Link to="/Kambaz/Courses/1234/Quizzes" id="wd-course-assignments-link"
        className="list-group-item text-danger border border-0">Quizzes</Link>
      <Link to="/Kambaz/Courses/1234/Grades" id="wd-course-grades-link"
        className="list-group-item text-danger border border-0">Grades</Link>
      <Link to="/Kambaz/Courses/:cid/People" id="wd-course-people-link"
        className="list-group-item text-danger border border-0">People</Link> */}
    </ListGroup>
  );
}
