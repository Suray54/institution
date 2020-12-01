import React from "react"
import SEO from "./../components/SEO"
import Layouts from "../components/layouts/layouts.components"
import MainBanner from "../components/homepage/main-banner/main-banner.components"

export default function Home() {
  return (
    <Layouts>
      <SEO title="Homepage" />
      <MainBanner />
    </Layouts>
  )
}
