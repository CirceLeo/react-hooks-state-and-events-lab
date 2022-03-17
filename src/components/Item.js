import React, { useState } from "react";



function Item({ name, category }) {
  const [isIn, setIn] = useState(false);
  const itemClass = isIn ? "in-cart" : ""

  function HandleItemClick(){
    setIn((isIn)=>!isIn)
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={HandleItemClick}>{isIn ? "Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
