import React, { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import LogoSvg from '../images/logo.svg';
import InstagramIcon from '../images/instagram.svg';
import FacebookIcon from '../images/facebook.svg';
import LinkedInIcon from '../images/linkedin.svg';
import '../styles/fonts.css';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    return (
        <nav className="flex flex-row justify-between items-center h-auto sm:h-14 bg-white text-white px-8 sm:px-16 py-4">
            {/* Logo Section */}
            <div className="flex items-start w-full sm:w-auto mt-5">
                <img src={LogoSvg} alt="Logo" className="h-10 sm:h-16" />
                {/* Toggle button for small screens */}
                <button onClick={toggleMenu} className="ml-auto sm:hidden block text-black hover:text-green-500 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {showMenu ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Menu Items */}
            <ul className={`flex flex-col mt-5 sm:flex sm:flex-row gap-8 sm:gap-10 text-lg font-semibold pt-2 items-start w-full  ${showMenu ? 'block' : 'hidden sm:block'}`}>
                <li>
                    <Link
                        to="Hero"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        activeClass="font-bold text-blue-900"
                        style={{ textDecoration: 'none' }}
                        onClick={closeMenu}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="Products"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        activeClass="font-bold"
                        style={{ textDecoration: 'none' }}
                        onClick={closeMenu}
                    >
                        Products
                    </Link>
                </li>
                <li>
                    <Link
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        activeClass="font-bold"
                        style={{ textDecoration: 'none' }}
                        onClick={closeMenu}
                    >
                        Contact Us
                    </Link>
                </li>
                <li>
                    <Link
                        to="aboutus"
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        activeClass="font-bold"
                        style={{ textDecoration: 'none' }}
                        onClick={closeMenu}
                    >
                        About Us
                    </Link>
                </li>
            </ul>

            {/* Social Media Icons - Only visible on larger screens */}
            <div className="hidden sm:flex items-center gap-4 mt-5">
                <a href="/">
                    <img src={InstagramIcon} alt="Instagram" className="h-10 w-10 text-white hover:text-green-500" />
                </a>
                <a href="/">
                    <img src={FacebookIcon} alt="Facebook" className="h-10 w-10 text-white hover:text-green-500" />
                </a>
                <a href="/">
                    <img src={LinkedInIcon} alt="LinkedIn" className="h-10 w-10 text-white hover:text-green-500" />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
