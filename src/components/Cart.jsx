import React, { useContext } from "react";
import { CartContext } from "../context/Cart";

function Cart() {
  const cart = useContext(CartContext);
  const total = cart.items.reduce((a, b) => a + b.price, 0);
  return (
    <div className="Cart">
      <h1>Cart</h1>
      {cart &&
        cart.items.map((item) => (
          <li>
            {item.name} - {item.price}$
          </li>
        ))}
      <h5>Total: {total}$</h5>
    </div>
  );
}

export default Cart;