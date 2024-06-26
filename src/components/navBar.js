import React, { useState } from 'react';
import PhoneIcon from '../images/icon_call.svg'; // Importing phone icon
import EmailIcon from '../images/icon_mail.svg'; // Importing email icon

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    return (
        <nav className="flex flex-col sm:flex-row justify-between pt-2 sm:pt-0   px-20 w-screen items-center sm:items-center h-[5%] sm:h-10 bg-[#15206D] text-white ">
            <div className='font-Jost text-xs sm:text-base'>
                Welcome to our yessa Dairy !
            </div>
            {/* Conditionally render email and phone number based on screen size */}
            <div className='hidden sm:flex gap-5 '>
                <span className='flex items-center mr-4 '>
                    <img src={PhoneIcon} alt="Phone Icon" className="h-4 w-4 mr-1 mt-6 " />
                    <span className="align-middle font-Jost text-xs sm:text-base ">+91 9825720827</span>
                </span>
                <span className='flex items-center'>
                    <img src={EmailIcon} alt="Email Icon" className="h-4 w-4 mr-1 mt-6" />
                    <span className="align-middle font-Jost text-xs sm:text-base ">yessa@gmail.com</span>
                </span>
            </div>
        </nav>
    );
}

export default Navbar;
