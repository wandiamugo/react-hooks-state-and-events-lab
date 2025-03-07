import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleClick(event) {
    setSelectedCategory(event.target.value)
  } 
  const UpdateState = items.filter(item => {
    if (selectedCategory == "All") {
      return true; 
    } else {
      return item.category === selectedCategory;
    }
  }) 
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleClick}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {UpdateState.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
