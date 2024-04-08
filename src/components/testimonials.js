import React from "react"

import Rating from "../images/rating.svg"
import Profile from "../images/profile.svg"

function Testimonials() {
  return (
    <div id="testi" className="min-h-[70%] bg-white">
      <div className="flex flex-col justify-center items-center gap-4 pt-10 text-black">
        <div className="flex justify-center items-center gap-2 text-[#983D7E]">
          <span className="font-extrabold">--------------</span>
          <span className="font-bold text-2xl">Testimonial</span>
          <span className="font-extrabold">--------------</span>
        </div>
        <span className="flex justify-center font-bold text-4xl">
          Customers Satisfaction
        </span>
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center  pb-10 rounded-3xl shadow-xl">
          <img
            src={Profile}
            alt="Milk"
            className="w-[30%] h-[30%]  mb-4 mt-10"
          />
          <p className="text-sm text-gray-500 px-4 text-center ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.  Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.  Lorem Ipsum has been he
            industry's standard.
          </p>
          <img src={Rating} alt="Milk" className="  mb-4" />
          <span>Mirage thakore</span>
          <span className=" text-[#7E7E7E]">Customer</span>
        </div>
        {/* Repeat for other cards */}
        <div className="flex flex-col items-center  pb-10 rounded-3xl shadow-xl">
          <img
            src={Profile}
            alt="Milk"
            className="w-[30%] h-[30%]  mb-4 mt-10"
          />
          <p className="text-sm text-gray-500 px-4 text-center ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.  Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.  Lorem Ipsum has been he
            industry's standard.
          </p>
          <img src={Rating} alt="Milk" className="  mb-4" />
          <span>Mirage thakore</span>
          <span className=" text-[#7E7E7E]">Customer</span>
        </div>

        <div className="flex flex-col items-center  pb-10 rounded-3xl shadow-xl">
          <img
            src={Profile}
            alt="Milk"
            className="w-[30%] h-[30%]  mb-4 mt-10"
          />
          <p className="text-sm text-gray-500 px-4 text-center ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.  Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.  Lorem Ipsum has been he
            industry's standard.
          </p>
          <img src={Rating} alt="Milk" className="  mb-4" />
          <span>Mirage thakore</span>
          <span className=" text-[#7E7E7E]">Customer</span>
        </div>

        <div className="flex flex-col items-center  pb-10 rounded-3xl shadow-xl">
          <img
            src={Profile}
            alt="Milk"
            className="w-[30%] h-[30%]  mb-4 mt-10"
          />
          <p className="text-sm text-gray-500 px-4 text-center ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.  Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s,Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.  Lorem Ipsum has been he
            industry's standard.
          </p>
          <img src={Rating} alt="Milk" className="  mb-4" />
          <span>Mirage thakore</span>
          <span className=" text-[#7E7E7E]">Customer</span>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
