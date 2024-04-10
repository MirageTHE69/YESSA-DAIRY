import * as React from "react"
import AboutImage from "../images/aboutImage.svg"

function HeroAbout() {
  return (
    <div className="w-screen min-h-screen bg-[#F8EDF5] flex flex-col" id="aboutus">
      {/* Header */}
      <div className="h-[20%] flex items-center justify-center text-[#983D7E] flex-col">
        <span className=" text-xl sm:text-3xl text-[#15206D] font-bold mb-2 mt-5  ">Home/About Us</span>
        <span className=" text-2xl sm:text-4xl text-[#15206D] font-bold mb-5">About Us</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row h-[80%] bg-white">
        {/* Image */}
        <img src={AboutImage} alt="" className="w-full sm:w-[40%] h-auto sm:h-[80%] ml-0 sm:ml-24 mt-5 sm:mt-0" />

        {/* Text */}
        <div className="w-full sm:w-[60%] p-6 sm:p-20 flex flex-col justify-center gap-5 text-[#15206D]">
          <div className="flex items-start justify-center gap-5 text-[#983D7E]">
            <span className="text-xl text-left font-bold">About us</span>
          </div>
          <span className="text-2xl sm:text-left font-bold w-full text-center">About Our Dairy</span>
          <p className="text-base text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="text-base text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p className="text-base text-left">
            Lorem Ipsum is simply dummy text of the printing and typesetting
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
