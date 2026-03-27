import React from "react";
import { useSelector } from "react-redux";
export default function Cart() {
  const cart = useSelector((state) => state.cart.items);
  console.log("cart",cart)
  return (
    <div>
      {cart.length > 0 && cart.map((item) => (
        <li key={item.id}>{item.name}-{item.price}-<button>-</button>{item.quantity}-<button>+</button>-{item.price*item.quantity}</li>
      ))}
    </div>
  );
}
