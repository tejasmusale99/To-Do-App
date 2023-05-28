import React from "react";

function Input() {
  return (
    <>
    <div className="input-conatainer"></div>
      <form>
        <input type="text" placeholder="Add Item" className="input" />
        <button className="btn">Add Item</button>
      </form>
    </>
  );
}
export default Input;
