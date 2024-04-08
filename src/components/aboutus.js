import React from "react"
import Frame from "../images/Frame.svg"

function Aboutus() {
  return (
    <div id="aboutus" className="w-screen  h-auto p-10 sm:p-0 sm:h-[60%] bg-[#F8EDF5] mt-20 flex flex-col sm:flex-row items-center   ">
      <div className="w-full sm:w-[35%] flex flex-col gap-5 p-6 sm:p-20">
        <div className="flex w-full items-start justify-center gap-5 text-[#983D7E]">
          <span className="text-xl text-left w-full font-bold ">
            About us --------------
          </span>
        </div>
        <p className="text-2xl w-[60%] text-left font-Ls font-bold text-[#15206D]">Lorem ipsum Dummy Text</p>
        <button className="text-white border  bg-[#15206D] w-[50%] sm:w-[50%] md:w-[50%] px-4 py-2 mr-1 rounded-[12px] hover:bg-[#15206D] hover:text-white transition-colors duration-300">
          Read More
        </button>
      </div>
      <div className="w-full sm:w-[30%]">
        <img
          src={Frame}
          alt="Email Icon"
          className="h-[80%] sm:h-full w-full"
        />
      </div>
      <div className="w-full sm:w-[35%] p-6 sm:p-10 ml-4 flex justify-center items-center flex-col text-[#888888]">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <p>
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
    </div>
  )
}

export default Aboutus