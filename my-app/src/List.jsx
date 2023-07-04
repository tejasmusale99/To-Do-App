import React, { useState } from "react";
import deleteIcon from "./images/bin.png"
function List(props) {
    function deleteClickHandler(){
        props.onDelete(props.id)
    }

    
    const [check,setCheck]=useState(false)
    function clickCheckboxHandle(){
      setCheck(true)
    }
  return (
    <>
      <ul>
        <div className="list-conatiner">
         
      
        <div className="mini-list_container">
        <input type="checkbox" className="check" onChange={clickCheckboxHandle}/> 
        <li className="list" style={{textDecoration:check?"line-through":null}}>{props.list}</li>
    <button className="btn" onClick={deleteClickHandler}><img src={deleteIcon} alt="deletebutton" className="delete_btn"/></button>
        </div>
        </div>
      </ul>
    </>
  );
}
export default List;
