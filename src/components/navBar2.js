import React, { useState, useEffect } from 'react';
import LogoSvg from '../images/logo.svg'; // Import your SVG logo
import InstagramIcon from '../images/instagram.svg'; // Import Instagram icon
import FacebookIcon from '../images/facebook.svg'; // Import Facebook icon
import LinkedInIcon from '../images/linkedin.svg'; // Import LinkedIn icon
import "../styles/fonts.css"

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    const [currentSection, setCurrentSection] = useState('home');

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    const smoothScrollTo = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -80; // Adjust the offset as needed
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const homeSection = document.getElementById('Hero');
            const productsSection = document.getElementById('Products');
            const contactSection = document.getElementById('contact');
            const aboutSection = document.getElementById('aboutus');

            if (scrollPosition < productsSection.offsetTop - 200) {
                setCurrentSection('Hero');
            } else if (scrollPosition >= productsSection.offsetTop - 200 && scrollPosition < contactSection.offsetTop - 200) {
                setCurrentSection('Poducts');
            } else if (scrollPosition >= contactSection.offsetTop - 200 && scrollPosition < aboutSection.offsetTop - 200) {
                setCurrentSection('contact');
            } else {
                setCurrentSection('aboutus');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className="flex flex-row pt-10  justify-between items-center h-auto sm:h-14 bg-white text-white px-8 sm:px-16 py-4">
            {/* Logo Section */}
            <div className="flex  gap-10 ml-4 ">
                
                <img src={LogoSvg} alt="Logo" className="h-8 sm:h-14" /> {/* Adjust the height as needed */}

                {/* Menu Items */}

                <ul className={`flex ${showLinks ? 'flex-col' : 'hidden'} sm:flex flex-col sm:flex-row gap-8 sm:gap-10 text-lg font-semibold  pt-2 items-center  `} >
                    <li>
                    <a href="#Hero" className={`text-[#808080] hover:text-[#15206D] no-underline ${currentSection === 'Hero' ? 'font-bold text-blue-900' : ''}`} onClick={() => smoothScrollTo('home')}>Home</a>
                    </li>
                    <li>
                        <a href="#Products" className={`text-[#808080] hover:text-[#15206D] no-underline ${currentSection === 'products' ? 'font-bold' : ''}`} onClick={() => smoothScrollTo('products')}>Products</a>
                    </li>
                    <li>
                        <a href="#contact" className={`text-[#808080] hover:text-[#15206D] no-underline ${currentSection === 'contact' ? 'font-bold' : ''}`} onClick={() => smoothScrollTo('contact')}>Contact Us</a>
                    </li>
                    <li>
                        <a href="#aboutus" className={`text-[#808080] hover:text-[#15206D] no-underline ${currentSection === 'about' ? 'font-bold' : ''}`} onClick={() => smoothScrollTo('about')}>About Us</a>
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
                <button onClick={toggleLinks} className="block text-black hover:text-green-500 focus:outline-none">
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
