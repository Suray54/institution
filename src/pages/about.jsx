import React from "react"
import SEO from "./../components/SEO"
import Layouts from "../components/layouts/layouts.components"
import Banner from "../components/banner/banner.components"
import AboutMain from "../components/about/about-main/about-main.component"
import { graphql } from "gatsby"
import Member from "../components/about/member/member.component"
const About = ({ data }) => {
  return (
    <Layouts>
      <SEO title="About" />
      <Banner image={data.backgroundImage.childImageSharp.fluid}>
        About Us
      </Banner>
      <AboutMain />
      <Member />
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
export default About
