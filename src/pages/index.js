import * as React from "react"
import Seo from "../components/seo"
import Navbar from "../components/navBar"
import Navbar2 from "../components/navBar2"
import Hero from "../components/hero"
import Prodcucts from "../components/products"
import Aboutus  from "../components/aboutus"

const IndexPage = () => (
  <div className=" h-screen bg-[#F8EDF5] gap-10 ">
    <Navbar />
    <Navbar2 />
    <Hero />
    <Prodcucts />
    <Aboutus/>
  </div>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
