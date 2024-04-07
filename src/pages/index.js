import * as React from "react"
import Seo from "../components/seo"
import Navbar from "../components/navBar"
import Navbar2 from "../components/navBar2"
import Hero from "../components/hero"
import Prodcucts from "../components/products"

const IndexPage = () => (
  <div className=" h-screen bg-[#F8EDF5] ">
    <Navbar />
    <Navbar2 />
    <Hero />
    <Prodcucts />
  </div>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
