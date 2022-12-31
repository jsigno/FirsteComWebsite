import React, { useContext } from "react";
import { ShopContext } from "../../components/context/shop-context";

export default function Product(props) {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div>
      <img className="h-96 px-4 " src={productImage} />
      <div className="pr-8">
        <div className="py-5 text-xl">
          <p className="font-bold">{productName}</p>
          <p>${price}</p>
        </div>
        <button
          onClick={() => addToCart(id)}
          className="rounded-lg border-black border-2 p-1 m hover:bg-black hover:text-white"
        >
          Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount}) </>}
        </button>
      </div>
    </div>
  );
}
