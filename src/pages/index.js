import * as React from "react"
import Seo from "../components/seo"
import Navbar from "../components/navBar"
import Navbar2 from "../components/navBar2"
import Hero from "../components/hero"
import Prodcucts from "../components/products"
import Aboutus  from "../components/aboutus"
import Footer from "../components/footer"
import Info from "../components/info"
import Testimonials from "../components/testimonials"
import Contactus from "../components/contactus"


const IndexPage = () => (
  <div className=" h-screen bg-[#F8EDF5] ">
    <Navbar />
    <Navbar2 />
    <Hero />
    <Prodcucts />
    <Aboutus/>
    <Info/>
    <Testimonials/>
    <Contactus/>
    <Footer/>
  
  </div>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
