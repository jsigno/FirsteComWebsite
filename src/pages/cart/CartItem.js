import React, { useContext } from "react";
import { ShopContext } from "../../components/context/shop-context";

export default function CartItem(props) {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="flex shadow-2xl rounded-2xl p-8">
      <img className="h-72 px-4" src={productImage} />
      <div className="pr-8">
        <div className="py-5 text-xl">
          <p className="font-bold">{productName}</p>
          <p>${price}</p>
          <div>
            <button onClick={() => removeFromCart(id)}> - </button>
            <input
              value={cartItems[id]}
              onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            />
            <button onClick={() => addToCart(id)}> + </button>
          </div>
        </div>
      </div>
    </div>
  );
}
