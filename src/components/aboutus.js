import React, { useState } from "react"
import Frame from '../images/Frame.svg';

function Aboutus() {
  return (
    <div className=" w-screen h-[70%] bg-[#F8EDF5]  mt-20">
      <div class="flex h-full  w-screen flex-row ">
        <div class="flex w-[35%] flex-col items-start justify-center gap-5  p-20">
          <div class="flex items-start justify-center gap-5 text-[#983D7E]">
            <span class="text-2xl font-bold">Our Products</span>
            
          </div>
          <p class="flex items-center justify-center text-2xl">
            Lorem ipsum Dummy Text
          </p>
          
          <button className="text-white border bg-[#15206D] w-[40%] px-4 py-2   rounded-lg hover:bg-[#15206D] hover:text-white transition-colors duration-300">Read More</button>
        
        </div>
        <div class="w-[30%] ">
        <img src={Frame} alt="Email Icon" className="h-[80%] sm:h-full w-full" />

        </div>
        <div class="w-[30%]  p-10 ml-4 flex justify-center items-center flex-col text-[#888888]">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. 
          </p>
          <p>
          It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
