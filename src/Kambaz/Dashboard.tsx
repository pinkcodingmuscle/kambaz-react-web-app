import { useDispatch, useSelector } from "react-redux";
import { addCourse, deleteCourse, updateCourse } from "./Courses/reducer";
import { Link } from "react-router-dom";
import { Button, Card, FormControl } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function Dashboard() {
  const dispatch = useDispatch();
  
  
  interface Course {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    description: string;
    image: string;
  }

  const courses = useSelector((state: any) => state.coursesReducer?.courses as Course[] || []);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isAuthorized = ["ADMIN", "TA", "FACULTY"].includes(currentUser?.role);
  const enrollments = useSelector((state: any) => state.enrollmentReducer.enrollments);
  const [Enrollments, setShowAllCourses] = useState(false);
  const toggleEnrollmentView = () => {
    setShowAllCourses(!Enrollments);
  };

  // Function to add a new course
  const addNewCourse = () => {
    if (!isAuthorized) return;
    dispatch(
      addCourse({
        _id: uuidv4(),
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        description: "New Description",
        image: "/images/plumplate.jpg",
      })
    );
  };

  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">Dashboard - Welcome {currentUser?.firstName}!</h1>
      <Button variant="primary" onClick={toggleEnrollmentView}>
              {Enrollments ? "Show Enrolled Courses" : "Show All Courses"}
      </Button>
    </div>
    <hr />

      

      {isAuthorized && (
        <>
          <h5>
            New Course
            <Button variant="warning" className=" float-end" onClick={updateCourse} id="wd-update-course-click">
              Update
            </Button>
            <Button variant="primary" className="float-end me-2 mb-2" onClick={addNewCourse}>
              Add
            </Button>
            
            <br />
            <FormControl placeholder="New Course" />
            <FormControl 
            as="textarea"
            rows={3}
            placeholder="Course Description" />

            
          </h5>
          <br />
        </>
      )}

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />

      <div className="row" id="wd-dashboard-courses">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card">
                <Link to={`/Kambaz/Courses/${course._id}/Home`} className="text-decoration-none text-dark">
                  <Card.Img variant="top" src={course.image || "/images/flyhigh.jpg"} width="100%" height={160} />
                  <Card.Body className="card-body">
                    <Card.Title className="text-nowrap overflow-hidden">{course.name}</Card.Title>
                    <Card.Text className="overflow-hidden" style={{ height: "100px" }}>
                      {course.description}
                    </Card.Text>
                    

                    {isAuthorized && (
                      <>
                      <Button className="float-end" variant="warning" onClick={() => dispatch(updateCourse({ ...course, name: "Updated" }))}>
                        Edit
                      </Button>
                      <Button className="float-end me-2" variant="danger" onClick={() => dispatch(deleteCourse(course._id))}>
                        Delete
                      </Button>
                      </>
                    )}
                    <Button variant="primary" className="float-left me-2"> Go </Button>
                  </Card.Body>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
