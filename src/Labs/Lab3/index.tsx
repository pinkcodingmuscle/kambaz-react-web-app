import { Container } from "react-bootstrap";
import VariablesAndConstants from "./VariableAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariable from "./BooleanVariables";
import IfElse from "./IfElse";
import TenaryOperator from "./TenaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInline";
import LegacyFunctions from "./LegacyFunctions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import TemplateLiterals from "./TemplateLiterals";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";
import House from "./House";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import DestructingImports from "./DestructingImports";
import Classes from "./Classes";
import Styles from "./Styles";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";
import PathParameters from "./PathParameters";



export default function Lab3() {
  console.log("Hello World!");
  return (
    <Container style={{padding:"2px", margin:"20px", border:"3px", textAlign:"left"}}> 
      <div>
        <h2>Lab 3: JavaScript</h2>
        <VariablesAndConstants/>
        <VariableTypes/>
        <BooleanVariable/>
        <IfElse/>
        <TenaryOperator/>
        <ConditionalOutputIfElse/>
        <ConditionalOutputInline/>
        <LegacyFunctions/>
        <ArrowFunctions/>
        <ImpliedReturn />
        <TemplateLiterals/>
        <SimpleArrays/>
        <ArrayIndexAndLength />
        <AddingAndRemovingDataToFromArrays/>
        <ForLoops/>
        <MapFunction/>
        <FindFunction/>
        <FindIndex/>
        <FilterFunction/>
        <House/>
        <TodoItem/>
        <TodoList/>
        <DestructingImports/>
        <Classes/>
        <Styles/>
        <Add a={3} b={4}/>
        <h4>Square of 4</h4>
        <Square>4</Square>
        <hr />
        <Highlight>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          uscipitratione eaque illo minus cum, saepe totam
          vel nihil repellat nemo explicabo excepturi consectetur. 
          Modi omnis minus sequi maiores, provident voluptates.
        </Highlight><hr />
        <PathParameters/>
      </div>
    </Container>
  );}
  