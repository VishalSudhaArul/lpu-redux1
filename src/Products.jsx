import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";
export default function Products() {
  const Dispatch = useDispatch();
  const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 200 },
    { id: 3, name: "Product 3", price: 300 },
  ];

  return (
    <div>
      {products.map((product) => (
        <li key={product.id}>
          {product.name}-{product.price}-
          <button onClick={() => Dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </li>
      ))}
    </div>
  );
}
