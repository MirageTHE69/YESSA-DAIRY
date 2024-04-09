import * as React from "react"
import Seo from "../components/seo"
import Navbar from "../components/navBar"
import Navbar2 from "../components/navBar2"
import HeroAbout from "../components/heroAbout"
import Aboutus2 from "../components/aboutus2"
import Info from "../components/info"
import Testimonials from "../components/testimonials"
import Footer from "../components/footer"
import History from "../components/history"

const AboutPage = () => (
  <div className=" h-screen bg-[#F8EDF5] ">
    <Navbar />
    <Navbar2 />
    <HeroAbout />
    <Aboutus2 />
    <History />
    <Info />
    <Testimonials />

    <Footer />
  </div>
)

export const Head = () => <Seo title="About us" />

export default AboutPage
