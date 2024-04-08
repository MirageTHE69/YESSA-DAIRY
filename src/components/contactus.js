import React from "react"
import Map from "../images/map.svg"
import LocationSvg from "../images/location.svg"
import PhoneSvg from "../images/phone_round.svg"
import MailSvg from "../images/mail_round.svg"

function Contactus() {
  return (
    <div className=" w-screen h-screen flex items-center  justify-center shadow-xl  ">
      <div className=" w-[85%] h-[75%] bg-[#15206D] rounded-[20px] flex flex-row">
        <div className=" w-[50%] h-full ">
          <img src={Map} alt="Map " className=" rounded-l-[20px] h-full object-cover" />
        </div>
        <div className=" w-[50%] h-full pt-10 pl-5">
            <span className=" text-white font-semibold font-Jost  text-4xl  w-full h-[50%]  ">Contact information</span>
            <div className=" w-full h-[20%]  mt-5 flex flex-row">
                <div className=" w-[30%] h-full p-1 mt-2">
                    <img src={LocationSvg} alt=" location icon" className=" w-[70%] h-[70%]"></img>
                </div>
                <div className=" w-full h-full flex flex-col items-center  justify-center gap-3 ">
                    <span className=" w-full items-start text-white  text-xl font-bold">
                    Address
                    </span>
                    <span className=" text-white text-sm font-light font-Jost w-full items-start">
                    No: 58 A, East Madison Street,Baltimore, MD, New york 4508
                    </span>

                </div>

            </div>

            <div className=" w-full h-[20%]  mt-5 flex flex-row">
                <div className=" w-[30%] h-full p-1 mt-2">
                    <img src={PhoneSvg} alt=" location icon" className=" w-[70%] h-[70%]"></img>
                </div>
                <div className=" w-full h-full flex flex-col items-center  justify-center gap-3 ">
                    <span className=" w-full items-start text-white  text-xl font-bold">
                    Phone number
                    </span>
                    <span className=" text-white text-sm font-light font-Jost w-full items-start">
                    000 – 123 – 456789
                    </span>
                    
                    <span className=" text-white text-sm font-light font-Jost w-full items-start">
                    000 – 123 – 456789
                    </span>

                </div>

            </div>

            <div className=" w-full h-[20%]  mt-5 flex flex-row">
                <div className=" w-[30%] h-full p-1 mt-2">
                    <img src={MailSvg} alt=" location icon" className=" w-[70%] h-[70%]"></img>
                </div>
                <div className=" w-full h-full flex flex-col items-center  justify-center gap-3 ">
                    <span className=" w-full items-start text-white  text-xl font-bold">
                    Email Address
                    </span>
                    <span className=" text-white text-sm font-light font-Jost w-full items-start">
                    info@example.com
                    </span>
                    
                    <span className=" text-white text-sm font-light font-Jost w-full items-start">
                    info1@example.com
                    </span>

                </div>

            </div>

        </div>
      </div>
    </div>
  )
}

export default Contactus
