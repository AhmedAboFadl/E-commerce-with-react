import React from 'react';
import { Link } from 'react-router-dom';

function Card({ product, addToCart }) {
  return (
    <div className="hover:scale-105 ease-in duration-300 cursor-pointer shadow-lg shadow-orange-900/10 rounded-lg p-4 w-full max-w-[200px] h-[300px] flex flex-col gap-auto my-4 wow animate__animated animate__zoomIn bg-white">
      <div className="w-full h-[150px] overflow-hidden rounded-lg bg-gray-200">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full "
        />
      </div>
      <h1 className="text-indigo-900 font-bold text-lg truncate mt-2">
        {product.title}
      </h1>
      <p className="text-gray-500 text-sm truncate mt-1">{product.description}</p>
      <div className="mt-auto flex flex-col gap-2">
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 transition"
        >
          Add to cart
        </button>
        <Link
          to={`/details/${product.id}`}
          className="text-indigo-500 font-semibold text-sm text-center"
        >
          Show more
        </Link>
      </div>
    </div>
  );
}

export default Card;
