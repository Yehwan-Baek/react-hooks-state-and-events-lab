import React from "react";

function Item({ name, category }) {
  function handleInCart(e) {
    return e.target.className = "in-cart"
  }

  return (
    <li className="" onClick={handleInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
