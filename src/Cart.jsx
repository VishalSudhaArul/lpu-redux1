import React from "react";
import { useSelector } from "react-redux";
export default function Cart() {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      {cart.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  );
}
