import React, { useState } from "react";

function Input(props) {
    const [input,setInput]=useState("")

    function inputHandler(event){
        setInput(event.target.value)
    }

    function clickHandler(e){
        props.addList(input)
        setInput("")
        e.preventDefault()
    }
    function handleForm(e){
        e.preventDefault()
    }
  return (
    <>
    <div className="input-container"></div>
      <form onClick={handleForm}>
        <input type="text" placeholder="Add Item" className="input" onChange={inputHandler}  value={input} name="input"/>
        <button className="btn" onClick={clickHandler}>Add Item</button>
      </form>
    </>
  );
}
export default Input;
