import React from "react";
import LogoSvg from '../images/logo.svg'; // Import your SVG logo
import InstagramIcon from '../images/instagram_footer.svg'; // Import Instagram icon
import FacebookIcon from '../images/facebook_footer.svg'; // Import Facebook icon
import LinkedInIcon from '../images/linkedin_footer.svg'; // Import LinkedIn icon

function Footer() {
  return (
    <div className="h-[40%] w-screen bg-[#15206D] text-white rounded-se-large p-6 sm:p-20">
      <div className="flex flex-col justify-center items-center h-full">
        <img src={LogoSvg} alt="Logo" className="h-18 w-18 mb-5 mt-6" />

        <div className="flex flex-col gap-2 sm:flex-row sm:gap-5">
          <span className="text-xs sm:text-base">Home</span>
          <span className="text-xs sm:text-base">Products</span>
          <span className="text-xs sm:text-base">About us</span>
          <span className="text-xs sm:text-base">Contact us</span>
        </div>

        <div className="mt-10 w-full border-b border-white "></div>
        
        <div className=" w-full flex flex-row  justify-between items-center   mt-8">
          <div>
        <span>© 2023 Yessa. All Rights Reserved.</span>
        </div>
        <div className=" flex flex-row gap-5 mt-5">
          <a href="/" className="text-black hover:text-blue-500">
            <img src={InstagramIcon} alt="Instagram" className="h-6 w-6 sm:h-8 sm:w-8" />
          </a>
          <a href="/" className="text-black hover:text-blue-500">
            <img src={FacebookIcon} alt="Facebook" className="h-6 w-6 sm:h-8 sm:w-8" />
          </a>
          <a href="/" className="text-black hover:text-blue-500">
            <img src={LinkedInIcon} alt="LinkedIn" className="h-6 w-6 sm:h-8 sm:w-8" />
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
