import { render } from "@testing-library/react";
import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  const [filterCategory, setFilterCategory] = useState("All")

  function handleSelect(event){
    setFilterCategory(event.target.value)
  }
  const filteredItems = items.filter((item) => {
    if (filterCategory === "All"){return true}
    else { return item.category === filterCategory}})

  let renderedItems = filteredItems.map(item => <Item key={item.id} name={item.name} category={item.category} />)
  
  if (filterCategory === "All"){console.log(filterCategory)}
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleSelect} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {renderedItems}
      </ul>
    </div>
  );
}

export default ShoppingList;
