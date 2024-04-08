import React from "react";
import MilkSvg from "../images/milk.svg";
import ButterSvg from "../images/butter.svg";
import GheeSvg from "../images/ghee.svg";

function Products() {
  return (
    <div  id="Products" className="  min-h-screen bg-white ">
      <div className="flex flex-col justify-center items-center gap-4 pt-10 text-black mt-10">
        <div className="flex justify-center items-center gap-2 text-[#983D7E]">
          <span className="font-extrabold">--------------</span>
          <span className="font-sm text-lg">Checkout Our Products</span>
          <span className="font-extrabold ">--------------</span>
        </div>
        <span className="flex justify-center font-bold text-4xl  mb-10 font-Ls text-[#15206D]">Introducing our products</span>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center  pb-10 rounded-3xl shadow-xl  ">
          <img src={MilkSvg} alt="Milk" className="w-full h-auto mb-4" />
          <h2 className="text-3xl text-[#15206D] font-bold mb-2 font-Ls">Milk</h2>
          <p className="text-sm text-gray-500 px-4 text-center ">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        {/* Repeat for other cards */}
        <div className="flex flex-col items-center bg-white pb-10 rounded-3xl shadow-xl">
          <img src={ButterSvg} alt="Milk" className="w-full h-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2 text-[#15206D] font-Ls ">Milk</h2>
          <p className="text-sm text-gray-500 px-4 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white pb-10 rounded-3xl shadow-xl">
          <img src={GheeSvg} alt="Milk" className="w-full h-auto mb-4" />
          <h2 className="text-3xl  font-bold mb-2 font-Ls text-[#15206D]">Milk</h2>
          <p className="text-sm text-gray-500 px-4 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white pb-10 rounded-3xl shadow-xl">
          <img src={MilkSvg} alt="Milk" className="w-full h-auto mb-4" />
          <h2 className="text-3xl font-bold mb-2 font-Ls text-[#15206D]">Milk</h2>
          <p className="text-sm text-gray-500 px-4 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        
        <div className="flex flex-col items-center bg-white pb-10 rounded-3xl shadow-xl">
          <img src={MilkSvg} alt="Milk" className="w-full h-auto mb-4" />
          <h2 className="text-3xl text-[#15206D] font-bold mb-2 font-Ls">Milk</h2>
          <p className="text-sm text-gray-500 px-4 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        
        <div className="flex flex-col items-center bg-white pb-10 rounded-3xl shadow-xl">
          <img src={MilkSvg} alt="Milk" className="w-full h-auto mb-4" />
          <h2 className="text-3xl text-[#15206D] font-bold mb-2 font-Ls">Milk</h2>
          <p className="text-sm text-gray-500 px-4 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Products;
