import React, { useState } from "react";

export default function ArrayStateVariable() {
 const [array, setArray] = useState([1, 2, 3, 4, 5]);
 const addElement = () => {
   setArray([...array, Math.floor(Math.random() * 100)]);
 };
 const deleteElement = (index: number) => {
   setArray(array.filter((item, i) => i !== index));
 };
 return (
  <div id="wd-array-state-variables">
   <h2>Array State Variable</h2>
   <button onClick={addElement} style={{ backgroundColor: 'green', color: 'white', borderRadius: '6px'  }}>Add Element</button>
   <ul>
    {array.map((item, index) => (
     <li key={index} style={{ display: 'flex', alignItems: 'left' }}> 
        <span style={{ marginRight: '50px', width: '30px', textAlign: 'left'}} >{item} </span>
        <button onClick={() => deleteElement(index)} style={{ backgroundColor: 'red', color: 'white', borderRadius: '6px'  }}>
            Delete</button>
     </li>))}
   </ul><hr/></div>);}

