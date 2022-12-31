import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../components/context/shop-context";
import CartItem from "./CartItem";

export default function Cart() {
  const {cartItems} = useContext(ShopContext)
  return (
    <div>
      <div className="flex justify-center align items-center font-bold text-4xl">
        <h3>Your Cart items</h3>
      </div>
      <div className="flex flex-col items-center">
      {PRODUCTS.map((product) => {
        if (cartItems[product.id] !== 0) {
          return <CartItem data={product}/>
        }
      })}
      </div>
    </div>
  );
}
