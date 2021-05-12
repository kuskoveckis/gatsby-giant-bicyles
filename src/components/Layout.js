import React from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

import "../assets/css/main.css"
// import "../assets/css/hardtail.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      {children}
      <Footer />
    </>
  )
}

export default Layout
