import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Navbar from "../components/navBar"
import Navbar2 from "../components/navBar2"
import Hero from "../components/hero"







const IndexPage = () => (


  <div className=" bg-[#F8EDF5] ">
    <Navbar/> 
    <Navbar2/>
    <Hero/>   
  </div>
)


export const Head = () => <Seo title="Home" />

export default IndexPage
