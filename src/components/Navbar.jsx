import React from "react";
import { Link } from "react-router-dom";

function Navbar(product) {
  return (
    <nav className="relative w-full bg-orange-400 h-[75px]">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <span className="text-[34px] font-bold text-blue-600">
            mega store
          </span>
        </div>

        <ul className="flex space-x-14 uppercase font-semibold text-white">
          <li className="hover:text-red-800">
            <Link to="/">home</Link>
          </li>
          <li className="hover:text-red-800">
            <Link to="/about">about me</Link>
          </li>
          <li className="hover:text-red-800">
            <Link to="/product">products</Link>
          </li>
          <li className="hover:text-red-800">
        <img src=".//cart.png" className="w-[40px] rounded-2xl" />
          </li>
        </ul>
      </div>
    </nav>



  );
}
export default Navbar;