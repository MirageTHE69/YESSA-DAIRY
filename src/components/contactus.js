import React from "react";
import Map from "../images/map.svg";
import LocationSvg from "../images/location.svg";
import PhoneSvg from "../images/phone_round.svg";
import MailSvg from "../images/mail_round.svg";

function Contactus() {
  return (
    <div id="contact" className="w-screen mb-10 pb-10 sm:mb-0 sm:pb-0  sm:h-[80%] flex items-center justify-center">
      <div className="w-[85%] h-auto sm:h-[85%] bg-[#15206D] rounded-[20px] flex flex-col sm:flex-row">
        <div className="w-full sm:w-[50%] h-[50%] sm:h-full">
          <img src={Map} alt="Map" className="  sm:rounded-l-[20px] h-full w-full object-cover" />
        </div>
        <div className="w-full sm:w-[50%] h-full pt-10 pl-5">
          <span className="text-white font-semibold font-Jost text-4xl w-full h-[20%] sm:h-[50%]">Contact information</span>
          <div className="w-full h-[60%] sm:h-auto mt-10 flex flex-col">
            <div className="w-full flex flex-row ">
              <div className="w-[30%] h-full p-1 mt-2">
                <img src={LocationSvg} alt="Location icon" className="w-[50%] h-[50%]" />
              </div>
              <div className="w-full h-full flex flex-col items-start justify-center gap-3 mt-4">
                <span className="text-white text-xl font-bold">Address</span>
                <span className="text-white text-sm font-light font-Jost">No: 58 A, East Madison Street, Baltimore, MD, New York 4508</span>
              </div>
            </div>
            <div className="w-full flex flex-row mt-5">
              <div className="w-[30%] h-full p-1 mt-2">
                <img src={PhoneSvg} alt="Phone icon" className="w-[50%] h-[50%]" />
              </div>
              <div className="w-full h-full flex flex-col items-start justify-center gap-3">
                <span className="text-white text-xl font-bold">Phone number</span>
                <span className="text-white text-sm font-light font-Jost">000 – 123 – 456789</span>
                <span className="text-white text-sm font-light font-Jost">000 – 123 – 456789</span>
              </div>
            </div>
            <div className="w-full flex flex-row mt-5">
              <div className="w-[30%] h-full p-1 mt-2">
                <img src={MailSvg} alt="Mail icon" className="w-[50%] h-[50%]" />
              </div>
              <div className="w-full h-full pb-10 sm:pb-0 flex flex-col items-start justify-center gap-3">
                <span className="text-white text-xl font-bold">Email Address</span>
                <span className="text-white text-sm font-light font-Jost">info@example.com</span>
                <span className="text-white text-sm font-light font-Jost">info1@example.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
