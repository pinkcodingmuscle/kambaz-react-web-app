import { Container } from "react-bootstrap";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ReduxExamples from "./ReduxExamples";

export default function Lab4(){
    function sayHello(){
        alert("Hello");
    }
    return(
        <Container style={{padding:"2px", margin:"20px", border:"3px", textAlign:"left"}}> 
            <div>
                <h2> Lab 3: Maintaining State in React Applications </h2>
                <ClickEvent/>
                <PassingDataOnEvent/>
                <PassingFunctions theFunction={sayHello}/>
                <EventObject/>
                <Counter/>
                <BooleanStateVariables/>
                <StringStateVariables/>
                <DateStateVariable/>
                <ObjectStateVariable/>
                <ArrayStateVariable/>
                <ReduxExamples/>
            </div>
        </Container>
    )
}