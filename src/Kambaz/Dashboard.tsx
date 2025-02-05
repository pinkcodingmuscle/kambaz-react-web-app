import { Link } from "react-router-dom";
import {Col, Row, Button, Card, Nav} from "react-bootstrap";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs = {1} md={5} className="g-4">
          <Col className="wd-dashboard-course" style={{width: "300px"}}>
            <Card>
              <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img variant="top" src="/images/reactjs.jpg" width={200} height={160} />
                <Card.Body>
                  <Card.Title className="wd-dashboard-course-title"> CS1234 React JS </Card.Title>
                  <Card.Text  className="wd-dashboard-course-description"> Full Stack software developer</Card.Text>
                  <Button variant="primary"> Go </Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1800/Home" className="wd-dashboard-course-link text-decoration-none text-dark" >
            <Card.Img variant="top" src="/images/solidred.jpg" width={200} height={160}/>
            <Card.Body>
              <Card.Title> CS1800 Discrete Math </Card.Title>
              <Card.Text className="wd-dashboard-course-title">Computer Science Engineer </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/2810/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img src="/images/lightblue.jpg" width={200} height={160} />
            <Card.Body>
              <Card.Title> CS2810 Mathematics for Data Models </Card.Title>
              <Card.Text className="wd-dashboard-course-title"> Machine Learning Engineer  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1111/Home" className="wd-dashboard-course-link text-decoration-none text-dark" >
            <Card.Img src="/images/warmflame.jpg" width={200} height={160}/>
            <Card.Body>
              <Card.Title> CS1111 Computer Science and Its Applications </Card.Title>
              <Card.Text className="wd-dashboard-course-title"> Software Engineer  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1134/Home" className="wd-dashboard-course-link text-decoration-none text-dark" >
            <Card.Img src="/images/solidbrown.jpg" width={200} height={160}/>
            <Card.Body>
              <Card.Title> CS1134 Fundamentals of Computer Science </Card.Title>
              <Card.Text className="wd-dashboard-course-title"> Software Engineer  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card> 
          <Link to="/Kambaz/Courses/1415/Home" className="wd-dashboard-course-link text-decoration-none text-dark" >
            <Card.Img src="/images/winterneva.jpg" width={200} height={160} />
            <Card.Body>
              <Card.Title> CS1415 Object-Oriented Design </Card.Title>
              <Card.Text className="wd-dashboard-course-title"> Computer Scientist  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link> 
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1450/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img src="/images/viciousstance.jpg" width={200} height={160}/>
            <Card.Body>
              <Card.Title> CS1450 Game Programming </Card.Title>
              <Card.Text className="wd-dashboard-course-title"> Computer Scientist  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
        </Card>
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/2300/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
            <Card.Img src="/images/plumplate.jpg" width={200} height={160}/>
            <Card.Body>
              <Card.Title> CS2300 Intro to Java </Card.Title>
              <Card.Text className="wd-dashboard-course-title"> Software Engineer  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
        </Card> 
      </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
        <Card>
          <Link to="/Kambaz/Courses/1200/Home" className="wd-dashboard-course-link text-decoration-none text-dark" >
            <Card.Img src="/images/solidred.jpg" width={200} height={160}/>
            <Card.Body>
              <Card.Title> CS1200 Intro to Python </Card.Title>
              <Card.Text className="wd-dashboard-course-title"> Computer Scientist  </Card.Text>
              <Button variant="primary"> Go </Button>
            </Card.Body>
          </Link>
        </Card> 
      </Col>
      </Row>
      </div>
    </div>
);}

