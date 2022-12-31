import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./product";

export default function Shop() {
  return (
    <div>
      <div>
        <h1 className="flex justify-center align-center text-5xl font-bold p-5">
          MY SHIT YOU SHOULD BUY
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid gap-4 grid-cols-3 grid-rows-3 align-center">
          {PRODUCTS.map((product) => (
            <Product data={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
