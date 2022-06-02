import React, { useState } from "react";
import TodoList from "./TodoList";
import './app.css';

const App = () => {
  const[inputList,setInputList]=useState("");
  const[Items,setItems]=useState([]);


  const itemEvent=(event)=>{
    setInputList(event.target.value);
  }

  const listOfItems=()=>{
    setItems((oldItems)=>{
      return [...oldItems,inputList]
    });
    setInputList("");

  }
  const deleteItems=(id)=>{
    console.log('deleted Items');

    setItems((oldItems)=>{
      return oldItems.filter((arrEle,index)=>{
           return index!==id;
      });
    });
}
  return (
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>todo list</h1>
        <br/>
        <input type="text" placeholder="Enter The Task" onChange={itemEvent} value={inputList} />
        <button onClick={listOfItems} >+</button>
        <ol>
          {/* <li>{inputList}</li> */}
          {Items.map((itemval,index)=>{
             return (<TodoList 
             key={index}
             id={index}
             text={itemval}
            onSelect={deleteItems}
             />)
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;
