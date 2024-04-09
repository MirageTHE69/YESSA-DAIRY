import React from "react"
import Frame from "../images/Frame.svg"

function Aboutus2() {
  return (
    <div id="aboutus" className="w-screen  h-auto p-10 sm:p-0 sm:h-auto bg-[#F8EDF5]  flex flex-col sm:flex-row items-center   ">
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

export default Aboutus2