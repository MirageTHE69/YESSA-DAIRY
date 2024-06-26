import * as React from "react"
import TrackSvg from "../images/track.svg"

function History() {
    return (
        <div className="w-screen h-auto mb-10 mt-10 justify-center items-center p-10">
            <div className="w-full mt-10 mb-16 items-center justify-center text-[#983D7E] flex flex-col">
                <span className="font-bold text-lg">----- Our Story -----</span>
                <span className="font-bold text-3xl text-[#15206D] mt-3">Lorem ipsum Dummy Text</span>
            </div>
            <div className="sm:flex sm:ml-10 ml-5  ">
                <div className="flex flex-col mb-10 sm:mb-0">
                    {/* Hide the SVG on small screens */}
                    <div className="hidden sm:flex w-1/4 flex-col items-center">
                        <img src={TrackSvg} alt="" className=" " />
                    </div>
                    <div className="w-full sm:w-3/4 flex flex-col items-center">
                        <div className="w-full justify-start text-2xl text-[#15206D] font-semibold">2021</div>
                        <div className="text-start flex w-full justify-start mt-2 p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                    </div>
                </div>
                <div className="flex flex-col mb-10 sm:mb-0">
                    {/* Hide the SVG on small screens */}
                    <div className="hidden sm:flex w-1/4 flex-col items-center">
                        <img src={TrackSvg} alt="" className="w-full" />
                    </div>
                    <div className="w-full sm:w-3/4 flex flex-col items-center">
                        <div className="w-full justify-start text-2xl text-[#15206D] font-semibold">2021</div>
                        <div className="text-start flex w-full justify-start mt-2 p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                    </div>
                </div>
                <div className="flex flex-col mb-10 sm:mb-0">
                    {/* Hide the SVG on small screens */}
                    <div className="hidden sm:flex w-1/4 flex-col items-center">
                        <img src={TrackSvg} alt="" className="w-full" />
                    </div>
                    <div className="w-full sm:w-3/4 flex flex-col items-center">
                        <div className="w-full justify-start text-2xl text-[#15206D] font-semibold">2021</div>
                        <div className="text-start flex w-full justify-start mt-2 p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                    </div>
                </div>
                <div className="flex flex-col mb-10 sm:mb-0">
                    {/* Hide the SVG on small screens */}
                    <div className="hidden sm:flex w-1/4 flex-col items-center">
                        <img src={TrackSvg} alt="" className="w-full" />
                    </div>
                    <div className="w-full sm:w-3/4 flex flex-col items-center">
                        <div className="w-full justify-start text-2xl text-[#15206D] font-semibold">2021</div>
                        <div className="text-start flex w-full justify-start mt-2 p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default History
