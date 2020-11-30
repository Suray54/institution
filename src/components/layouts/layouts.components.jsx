import React from "react"
import Footer from "./footer/footer.components"
import Navbar from "./navbar/navbar.components"
import Top from "./top/top.components"

const Layouts = ({ children }) => {
  return (
    <>
      <Top />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default Layouts
