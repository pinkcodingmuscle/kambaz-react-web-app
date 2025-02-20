import { Routes, Route, Link } from "react-router-dom";
import AddPathParameters from "./AddPathParameters";
export default function PathParameters() {
  return (
   <div id="wd-path-parameters">
    <h2>Path Parameters</h2>

    {/* Links to dynamically generate values for a and b */}
    <Link to="/Labs/Lab3/add/1/2">1 + 2</Link> <br />
    <Link to="/Labs/Lab3/add/3/4">3 + 4</Link>

    {/* Defines the dynamic route */}
    <Routes>
      <Route path="add/:a/:b" element={<AddPathParameters />} />
    </Routes>
   </div>
  );
}
