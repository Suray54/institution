import React from "react"
import SEO from "./../components/SEO"
import Layouts from "../components/layouts/layouts.components"
import Banner from "../components/banner/banner.components"
import ContactMain from "../components/contact/contact-main/contact-main.components"
import MapLocation from "../components/contact/map/map.components"

const Contact = () => {
  return (
    <Layouts>
      <SEO title="Contact" />
      <Banner> Contact Us </Banner>
      <ContactMain />
      <MapLocation />
    </Layouts>
  )
}
export default Contact
