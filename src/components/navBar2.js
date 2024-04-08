import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import LogoSvg from '../images/logo.svg';
import InstagramIcon from '../images/instagram.svg';
import FacebookIcon from '../images/facebook.svg';
import LinkedInIcon from '../images/linkedin.svg';
import '../styles/fonts.css';

function Navbar() {
    return (
        <nav className="flex flex-row pt-10 justify-between items-center h-auto sm:h-14 bg-white text-white px-8 sm:px-16 py-4">
            {/* Logo Section */}
            <div className="flex gap-10 ml-4">
                <img src={LogoSvg} alt="Logo" className="h-8 sm:h-14" />
                <ul className="flex flex-col sm:flex-row gap-8 sm:gap-10 text-lg font-semibold pt-2 items-center">
                    <li>
                        <Link
                            to="Hero"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            activeClass="font-bold text-blue-900"
                            style={{ textDecoration: 'none' }}
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
                        >
                            About Us
                        </Link>
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
                <button
                    onClick={() => scroll.scrollToTop()}
                    className="block text-black hover:text-green-500 focus:outline-none mb-5"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
