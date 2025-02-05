import Modules from "../Modules";
import CourseStatus from "./Status";
import ModuleControls from "./ModuleControls"
export default function Home() {
  return (
    <div className="d-flex" id="wd-home">
      <div className="flex-fill me-3">
          <Modules />
        <div className="d-none d-xl-block">
          <CourseStatus />
          <ModulesControls />
        </div>
      </div>
    </div>
);}

