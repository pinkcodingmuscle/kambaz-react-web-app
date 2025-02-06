import { Form, InputGroup } from "react-bootstrap";
import { IoCalendarClearOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <Form.Control defaultValue="alice" placeholder="username" id="wd-username" className="mb-2"/>
      <Form.Control defaultValue="123"   placeholder="password" type="password"
             id="wd-password" className="mb-2"/>
      <Form.Control defaultValue="Alice" placeholder="First Name" id="wd-firstname"  className="mb-2"/>
      <Form.Control defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" className="mb-2" />
       
      <InputGroup>
        <Form.Control defaultValue="2000-01-01" type="date" id="wd-dob"/>
        <InputGroup.Text >
            <IoCalendarClearOutline />
        </InputGroup.Text>
      </InputGroup>
      
      <Form.Control defaultValue="alice@wonderland" type="email" id="wd-email" className="mb-2" />
      <Form.Select defaultValue="FACULTY" id="wd-role">
        <option value="USER">User</option>       
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option> 
        <option value="STUDENT">Student</option>
      </Form.Select><br/>
      <Link to="/Kambaz/Account/Signin" className="btn btn-danger w-100 mb-2">Sign out</Link>
      
    </div>
);}

