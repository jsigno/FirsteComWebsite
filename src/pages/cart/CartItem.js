import React from "react";

export default function CartItem(props) {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="flex">
    <img className="h-72 px-4" src={productImage} />
    <div className="pr-8">
      <div className="py-5 text-xl">
        <p className="font-bold">{productName}</p>
        <p>${price}</p>
      </div>
    </div>
  </div>
  );
}
