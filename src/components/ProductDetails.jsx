import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching product details: {error.message}</div>;
  }

  return (
    <div className="p-6  max-w-screen-lg mx-auto wow animate__animated animate__zoomIn">
      <h1 className="text-3xl font-bold mb-6 ">{product.title}</h1>
      <div className="flex gap-[120px]">
        <div className="w-1/2 pr-4 ">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto object-cover rounded-lg border border-gray-300 shadow-md "
          />
        </div>
        <div className="w-1/2 flex flex-col justify-between">
          <div>
            <p className="text-lg mb-4">{product.description}</p>
            <p className="text-lg font-semibold mb-2">Price: ${product.price}</p>
            <p className="text-lg font-semibold mb-4">Category: {product.category}</p>
          </div>
          <button className=" bottom-[200px] bg-blue-600 text-white rounded-md p-2 hover:bg-blue-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
