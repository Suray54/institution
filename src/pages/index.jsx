import React from "react"
import SEO from "./../components/SEO"
import Layouts from "../components/layouts/layouts.components"
import MainBanner from "../components/homepage/main-banner/main-banner.components"
import AboutSection from "../components/homepage/about-section/about-section.components"
import ServicesSection from "../components/homepage/services-section/services-section.components"
import AchivementSection from "../components/homepage/achivement-section/achivement-section.components"

export default function Home() {
  return (
    <Layouts>
      <SEO title="Homepage" />
      <MainBanner />
      <AboutSection />
      <ServicesSection />
      <AchivementSection />
    </Layouts>
  )
}
