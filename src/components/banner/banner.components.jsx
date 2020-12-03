import React from "react"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import "./banner.styles.scss"
const getBackImages = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "dark.webp" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Banner = ({ children, image }) => {
  const data = useStaticQuery(getBackImages)
  return (
    <BackgroundImage
      tag="section"
      className="background-small"
      fluid={image || data.backgroundImage.childImageSharp.fluid}
    >
      <h1>{children}</h1>
      <p>
        <span className="bottom">Home</span> / <span>{children}</span>
      </p>
    </BackgroundImage>
  )
}

export default Banner
