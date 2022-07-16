import React,{useState} from "react";


function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)

  function handleEvent() {
    setIsInCart((isInCart) => !isInCart)
  }
  return (
    <li className= {isInCart? "in-Cart" : ""}>

      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleEvent} className= {isInCart? "remove" : "add"}>{isInCart? "Remove from" : "Add to"}Cart</button>
    </li>
  );
}

export default Item;
