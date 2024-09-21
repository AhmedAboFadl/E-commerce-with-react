// Main.js
import React from "react";
import ProductsList from "./ProductsList";
import useWow from './useWow';
function HomePage() {
    useWow();
  return (
    <>
        {/* the main section  */}

    <div className="relative flex flex-col items-center w-full ">
      <div className="relative w-[56%] h-[400px] rounded-[50px] object-cover mt-14 bg-cover bg-[url('img1.jpg')] ">
        <div className="text-white w-[360px] mt-[20px] mx-[40px]">
          <h1 className="text-[45px] font-mono">Shop With Us!</h1>
          <p className="text-[17px] font-mono">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laboriosam assumenda ea quo cupiditate facere deleniti fuga
            officia.
          </p>
          <button className="bg-blue-600 rounded-[4px] p-[2px] my-[20px] mx-6 font-mono hover:bg-blue-500">
            SHOP NOW
          </button>
          <button className="bg-blue-600 rounded-[4px] p-[2px] font-mono hover:bg-blue-500">
            READ MORE
          </button>
        </div>
      </div>
      <div className="w-full mt-10">

    {/* product list show */}

        <ProductsList />

{/* product list show */}



      </div>
    </div>

    <br/>

        {/* middel section */}

<div className=" relative flex bg-blue-400 items-center h-[390px] mt-[180px] container mx-auto wow animate__animated animate__fadeIn">

      <div className="relative  h-[100%] w-[1000px] ml-[100px] mb-[100px] wow animate__animated animate__zoomIn">
        <img src="img2.png"/>
    </div>

    <div className="w-[50%] text-white mr-[80px] wow animate__animated animate__zoomIn">

        <h1 className="text-[40px] min:m-auto">Best Savings onnew arrivals!</h1>

        <p>Qui ex dolore at repellat, quia neque doloribus omnis adipisci, ipsum eos odio fugit ut eveniet blanditiis praesentium totam non nostrum dignissimos nihil eius facere et eaque. Qui, animi obcaecati.</p>
    </div>
</div>

<br/>
        {/* bottom Section */}

<div className="relative w-full h-[400px] flex flex-col items-center justify-center bg-gray-50 p-6 shadow-lg mt-[150px]">
  <h1 className="text-3xl font-bold mb-6 text-gray-800 wow animate__animated animate__zoomIn">Why Shop With Us</h1>

  <div className="flex flex-col md:flex-row items-center justify-center gap-8">
    <div className="text-center p-4 bg-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2 text-blue-900 wow animate__animated animate__backInLeft">Fast Delivery</h2>
      <p className="text-gray-500 wow animate__animated animate__backInLeft">Variations of passages of Lorem Ipsum available</p>
    </div>

    <div className="text-center p-4 bg-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2 text-blue-900 wow animate__animated animate__backInUp">Free Shipping</h2>
      <p className="text-gray-500 wow animate__animated animate__backInUp">Variations of passages of Lorem Ipsum available</p>
    </div>

    <div className="text-center p-4 bg-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-2 text-blue-900 wow animate__animated animate__backInRight">Best Quality</h2>
      <p className="text-gray-500 wow animate__animated animate__backInRight">Variations of passages of Lorem Ipsum available</p>
    </div>
  </div>
</div>

    </>
  );
}

export default HomePage;
