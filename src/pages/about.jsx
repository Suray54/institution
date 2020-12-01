import React from "react"
import SEO from "./../components/SEO"
import Layouts from "../components/layouts/layouts.components"
import VideoBanner from "../components/homepage/video-banner/video-banner.components"
const About = () => {
  return (
    <Layouts>
      <SEO title="About" />
      <VideoBanner />
    </Layouts>
  )
}

export default About
