import React from "react"
import Info1 from "../images/info1.svg"
import Info2 from "../images/info2.svg"
import Info3 from "../images/info3.svg"
import Info4 from "../images/info4.svg"

function Info() {
  return (
    <div className="w-screen h-[40%] bg-[#15206D] flex justify-center items-center">
      <div className="flex justify-center gap-8">
        {/* Card 1 */}
        <div className="flex flex-col items-center text-white gap-3">
          <img src={Info1} alt="Email Icon" className="h-16 w-16 mb-2" />
          <span className="text-4xl ">1500+</span>
          <span className="text-sm text-center w-[60%]">
            Families Consume Heritage Products Daily
          </span>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center text-white gap-3">
          <img src={Info2} alt="Email Icon" className="h-16 w-16 mb-2" />
          <span className="text-4xl">859+</span>
          <span className="text-sm text-cente w-[60%]r">
            Heritage Parlors Operated by Our Franchisees
          </span>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-white gap-3">
          <img src={Info3} alt="Email Icon" className="h-16 w-16 mb-2" />
          <span className="text-4xl">1,25,000</span>
          <span className="text-sm text-center w-[60%]">
            Retail Outlets Sell Heritage Products From Their Stores
          </span>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center text-white gap-3">
          <img src={Info4} alt="Email Icon" className="h-16 w-16 mb-2" />
          <span className="text-4xl">187</span>
          <span className="text-sm text-center w-[60%]">
            Bulk Coolers, Mini Chilling & Chilling Centres Procure Milk Daily
          </span>
        </div>
      </div>
    </div>
  )
}

export default Info
