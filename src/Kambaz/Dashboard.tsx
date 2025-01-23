import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br/>
        <div className="wd-dashboard-course"> 
          <Link to="/Kambaz/Courses/1800/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/solidred.jpg" width={200} />
            <div>
              <h5> CS1800 Discrete Structures </h5>
              <p className="wd-dashboard-course-title">
                Computer Science Engineer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br/>
        <div className="wd-dashboard-course"> 
          <Link to="/Kambaz/Courses/2810/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/lightblue.jpg" width={200} />
            <div>
              <h5> CS2810 Mathematics of Data Models </h5>
              <p className="wd-dashboard-course-title">
                Machine Learning Engineer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br/>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1111/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/warmflame.jpg" width={200} />
            <div>
              <h5> CS1111 Computer Science and Its Applications </h5>
              <p className="wd-dashboard-course-title">
                Software Engineer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <br/>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1134/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/solidbrown.jpg" width={200} />
            <div>
              <h5> CS1134 Fundamentals of Computer Science </h5>
              <p className="wd-dashboard-course-title">
                Software Engineer  </p>
              <button> Go </button>
            </div>
          </Link> 
        </div>
        <br/>
        <div className="wd-dashboard-course"> 
          <Link to="/Kambaz/Courses/1415/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/winterneva.jpg" width={200} />
            <div>
              <h5> CS1415 Object-Oriented Design </h5>
              <p className="wd-dashboard-course-title">
                Computer Scientist  </p>
              <button> Go </button>
            </div>
          </Link> 
        </div>
        <br/>
        <div className="wd-dashboard-course"> 
          <Link to="/Kambaz/Courses/1450/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/viciousstance.jpg" width={200} />
            <div>
              <h5> CS1450 Game Programming </h5>
              <p className="wd-dashboard-course-title">
                Computer Scientist  </p>
              <button> Go </button>
            </div>
          </Link> 
        </div>
        <br/>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/2300/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/plumplate.jpg" width={200} />
            <div>
              <h5> CS2300 Intro to Java </h5>
              <p className="wd-dashboard-course-title">
                Software Engineer  </p>
              <button> Go </button>
            </div>
          </Link> 
        </div>
        <br/>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1200/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/solidred.jpg" width={200} />
            <div>
              <h5> CS1200 Intro to Python </h5>
              <p className="wd-dashboard-course-title">
                Computer Scientist  </p>
              <button> Go </button>
            </div>
          </Link>  
        </div>
      </div>
    </div>
);}

