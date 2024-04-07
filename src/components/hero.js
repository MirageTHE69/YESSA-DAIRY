import React, { useState } from 'react';
import HeroImg from "../images/heroImg.svg";

function Hero() {
    return (
        <div className="h-screen w-screen bg-[#F8EDF5] flex flex-col sm:flex-row justify-around ">
            <div className="flex flex-col justify-center sm:w-[50%] p-6 ml-10">
                <div className="flex flex-col gap-6">
                    <span className="text-lg font-Jost   font-medium text-[#983D7E]">Lorem Ipsum is simply dummy text </span>
                    <div className="text-5xl font-extrabold text-[#15206D] font-Ls">
                        <p>Delightful Dairy:</p>
                        <p>Explore Freshness,</p>
                        <p>Taste, and Health</p>
                    </div>
                    <p className="text-[#888888] font-Jost">Welcome to Delightful Dairy, where freshness meets flavor, and health meets happiness! Explore our range of premium dairy products straight from our farms to your table. From creamy milk to wholesome paneer and refreshing lassi, we bring you the goodness of nature in every bite and sip. Indulge in the taste of tradition with a modern twist!</p>
                    <button className="text-white border bg-[#15206D] w-[30%] px-4 py-2  rounded-lg hover:bg-[#15206D] hover:text-white transition-colors duration-300">Explore More</button>
                </div>
            </div>
            <div className="h-full sm:w-[50%] flex items-center justify-center">
                <img src={HeroImg} alt="Email Icon" className="h-[80%] sm:h-full w-full" />
            </div>
        </div>
    );
}

export default Hero;
