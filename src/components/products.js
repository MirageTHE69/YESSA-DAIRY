import React from "react";
import MilkSvg from "../images/milk.svg";

function Products() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col justify-center items-center gap-4 pt-10 text-black">
        <div className="flex justify-center items-center gap-2 text-[#983D7E]">
          <span className="font-extrabold">--------------</span>
          <span className="font-bold text-2xl">Our Products</span>
          <span className="font-extrabold">--------------</span>
        </div>
        <span className="flex justify-center font-bold text-4xl">Introducing our products</span>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center  pb-10 rounded-3xl shadow-xl">
          <img src={MilkSvg} alt="Milk" className="w-full h-auto mb-4" />
          <h2 className="text-lg font-bold mb-2">Milk</h2>
          <p className="text-sm text-gray-500 px-4 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        {/* Repeat for other cards */}
        <div className="flex flex-col items-center bg-white pb-10 rounded-3xl shadow-xl">
          <img src={MilkSvg} alt="Milk" className="w-full h-auto mb-4" />
          <h2 className="text-lg font-bold mb-2">Milk</h2>
          <p className="text-sm text-gray-500 px-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white pb-10 rounded-3xl shadow-xl">
          <img src={MilkSvg} alt="Milk" className="w-full h-auto mb-4" />
          <h2 className="text-lg font-bold mb-2">Milk</h2>
          <p className="text-sm text-gray-500 px-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white pb-10 rounded-3xl shadow-xl">
          <img src={MilkSvg} alt="Milk" className="w-full h-auto mb-4" />
          <h2 className="text-lg font-bold mb-2">Milk</h2>
          <p className="text-sm text-gray-500 px-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        
        <div className="flex flex-col items-center bg-white pb-10 rounded-3xl shadow-xl">
          <img src={MilkSvg} alt="Milk" className="w-full h-auto mb-4" />
          <h2 className="text-lg font-bold mb-2">Milk</h2>
          <p className="text-sm text-gray-500 px-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        
        <div className="flex flex-col items-center bg-white pb-10 rounded-3xl shadow-xl">
          <img src={MilkSvg} alt="Milk" className="w-full h-auto mb-4" />
          <h2 className="text-lg font-bold mb-2">Milk</h2>
          <p className="text-sm text-gray-500 px-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Products;
