import React, { useState } from "react";
import Input from "./Input";
import "./App.css";
import List from "./List";
import Nav from "./Nav";

function App() {
  const [list,setList]=useState([])

  function handleListInput(input) {
    setList((prevValue)=>{
      return[...prevValue,input]
    })
  }

  function deleteItem(id){
    setList((oldItem)=>{
      return oldItem.filter((CurItem,index)=>{
        return index !== id
      })
    })
  }

  return (
    <>
    <Nav />
      <div className="container">
        <div className="small-container">

          <Input addList={handleListInput} />

          {list.map((curItem,index)=>{
            return <List list={curItem} key={index} id={index} onDelete={deleteItem}/>
          })}
        
        </div>
      </div>
    </>
  );
}
export default App;
