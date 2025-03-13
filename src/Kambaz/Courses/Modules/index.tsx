// import { Button, Dropdown } from "react-bootstrap";
import ModulesControls from "./ModulesControls"
import ListGroup from "react-bootstrap/ListGroup";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import {useState} from "react";
import { useParams } from "react-router";
//import * as db from "../../Database";
//import { v4 as uuidv4 } from "uuid";
import { FormControl } from "react-bootstrap";
import { addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import { useSelector, useDispatch } from "react-redux";


export default function Modules() {
  const { cid } = useParams();
  
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();


    return (
      <div> 
        <ModulesControls setModuleName={setModuleName} 
        moduleName={moduleName} 
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");}}/>
          
          <br /><br /><br /><br />

        <ListGroup className="rounded-0" id="wd-modules">
          {modules
            .filter((module:any) => module.course === cid)
            .map((module:any) => (
          <ListGroup.Item className="wd-module list-group p-0 mb-5 fs-5 border-gray">
            <div key={module._id} className="wd-title p-3 ps-2 bg-secondary"> 
              <BsGripVertical className="me-2 fs-3" /> 
              {!module.editing && module.name}
              { module.editing && (
                <FormControl className="w-50 d-inline-block"
                      onChange={(e) => 
                        dispatch(
                          updateModule({ ...module, name: e.target.value })
                          )
                        }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          dispatch(updateModule({ ...module, editing: false }));
                        }
                      }}
                      defaultValue={module.name}/>
              )}
              <ModuleControlButtons moduleId={module._id}
                    deleteModule={(moduleId) => {
                      dispatch(deleteModule(moduleId));}}
                      editModule={(moduleId) => dispatch(editModule(moduleId))}/>
            </div>
            {module.lessons && (
              <ListGroup className="wd-lessons list-groups rounded-0">
              {module.lessons.map((lesson:any) => (
                <ListGroup.Item className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                </ListGroup.Item>))}
              </ListGroup>)}
          </ListGroup.Item>))}
        </ListGroup>     
      </div>
  );}