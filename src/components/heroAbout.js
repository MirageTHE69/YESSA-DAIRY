import * as React from "react"
import AboutImage from "../images/AboutImage.svg"

function HeroAbout() {
  return (
    <div className=" w-screen h-screen bg-[#F8EDF5]  " id="aboutus">
      <div className=" w-full h-[20%]  items-center justify-center text-[#983D7E] flex flex-col">
        Home/About Us
        <span className=" text-3xl text-[#15206D]  font-bold">
          About us
        </span>
      </div>
      <div className=" w-full h-[70%] bg-white flex flex-row ">
        <img src={AboutImage} alt=" " className=" w-[1/2] h-[80%] ml-24 mt-14" />

        <div className="w-full sm:w-full h-full   gap-5 p-6 sm:p-20 ">
          <div className="flex w-full items-start justify-center gap-5 text-[#983D7E]">
            <span className="text-xl text-left w-full font-bold  mb-5">
              About us --------------
            </span>
          </div>
          <span className="text-2xl text-left w-full mb-5 font-bold text-[#15206D]  ">
            About Our Dairy
          </span>
          <p className="text-base  text-left font-Ls font-normal text-[#15206D] mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <p className="text-base  text-left font-Ls font-normal text-[#15206D]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <p className="text-base text-left font-Ls font-normal text-[#15206D]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroAbout
