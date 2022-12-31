import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react"

export default function NavBar() {
  return (
    <div className=" w-full h-20 flex justify-between items-center text-2xl font-bold bg-black text-white">
      <div className="px-3">
        MY SHIT
      </div>
        <div>
            <ul className="flex px-3">
                <li>
                    <Link to="/">Shop</Link>
                </li>
                <li>
                    <Link to="/cart"><ShoppingCart size={32}/></Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
