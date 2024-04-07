import React, { useState } from 'react';
import LogoSvg from '../images/logo.svg'; // Import your SVG logo
import InstagramIcon from '../images/instagram.svg'; // Import Instagram icon
import FacebookIcon from '../images/facebook.svg'; // Import Facebook icon
import LinkedInIcon from '../images/linkedin.svg'; // Import LinkedIn icon
import "../styles/fonts.css"

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    return (
        <nav className="flex flex-row pt-10  justify-between items-center h-auto sm:h-14 bg-white text-white px-8 sm:px-16 py-4">
            {/* Logo Section */}
            <div className="flex  gap-10 ">
                
                <img src={LogoSvg} alt="Logo" className="h-8 sm:h-10" /> {/* Adjust the height as needed */}

                {/* Menu Items */}

               <ul className={`flex ${showLinks ? 'flex-col' : 'hidden'} sm:flex flex-col sm:flex-row gap-8 sm:gap-10 text-lg font-semibold  pt-1 `}>
                <li>
                    <a href="/" className="text-[#808080] hover:text-[#15206D] no-underline">Home</a>
                </li>
                <li>
                    <a href="/" className="text-[#808080] hover:text-[#15206D] no-underline">Products</a>
                </li>
                <li>
                    <a href="/" className="text-[#808080] hover:text-[#15206D] no-underline">Contact Us</a>
                </li>
                <li>
                    <a href="/" className="text-[#808080] hover:text-[#15206D] no-underline">About Us</a>
                </li>
            </ul>
           
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
                <a href="/">
                    <img src={InstagramIcon} alt="Instagram" className="h-8 w-8 text-white hover:text-green-500" />
                </a>
                <a href="/">
                    <img src={FacebookIcon} alt="Facebook" className="h-8 w-8 text-white hover:text-green-500" />
                </a>
                <a href="/">
                    <img src={LinkedInIcon} alt="LinkedIn" className="h-8 w-8 text-white hover:text-green-500" />
                </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="sm:hidden">
                <button onClick={toggleLinks} className="block text-white hover:text-green-500 focus:outline-none">
                    {showLinks ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    )}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
