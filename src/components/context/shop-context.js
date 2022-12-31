import React, { createContext, useState } from "react";
import { PRODUCTS } from "../../products";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export default function ShopContextProvider(props) {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemsId) => {
    setCartItems((prev) => ({ ...prev, [itemsId]: prev[itemsId] + 1 }));
  };

  const removeFromCart = (itemsId) => {
    setCartItems((prev) => ({ ...prev, [itemsId]: prev[itemsId] - 1 }));
  };


  const contextValue = { cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}
