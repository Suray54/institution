import React from "react"
import SEO from "./../components/SEO"
import Layouts from "../components/layouts/layouts.components"
import Banner from "../components/banner/banner.components"
import { graphql } from "gatsby"
import ServicesMain from "../components/services/services-main/services-main.components"
import CoursesMain from "../components/services/courses-main/courses-main.components"

const services = ({ data }) => {
  return (
    <Layouts>
      <SEO title="Services" />
      <Banner image={data.backgroundImage.childImageSharp.fluid}>
        Our Services
      </Banner>
      <CoursesMain />
      <ServicesMain />
    </Layouts>
  )
}
export const getBackImages = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "library.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default services
