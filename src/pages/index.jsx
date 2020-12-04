import React from "react"
import SEO from "./../components/SEO"
import Layouts from "../components/layouts/layouts.components"
import MainBanner from "../components/homepage/main-banner/main-banner.components"
import AboutSection from "../components/homepage/about-section/about-section.components"
import ServicesSection from "../components/homepage/services-section/services-section.components"
import CoursesSection from "../components/homepage/courses-section/courses-section.components"
import Testimonials from "../components/homepage/testimonial/testimonial.components"
import GetInTouch from "../components/homepage/get-in-touch/touch.components"

export default function Home() {
  return (
    <Layouts>
      <SEO title="Homepage" />
      <MainBanner />
      <AboutSection />
      <CoursesSection />
      <GetInTouch />
      <ServicesSection />
      <Testimonials />
    </Layouts>
  )
}
