import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import "./main-banner.styles.scss"
import ContactForm from "../../form/form.components"
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
const MainBanner = () => {
  const data = useStaticQuery(getBackImages)
  return (
    <BackgroundImage
      tag="section"
      className="background"
      fluid={data.backgroundImage.childImageSharp.fluid}
    >
      <div className="container-fluid">
        <div className="row background__details">
          <div className="col-md-8 background__details-main">
            <h1>
              Education Courses. <span>Study For Better Future</span>
            </h1>
            <p>
              Onec Consequat Sapien Ut Leo Cursus Rhoncus. Nullam Dui Mi,
              Vulputate Ac Metus Semper Nullam Dui Mi. Vestibulum Ante. Morbi At
              Dui Nisl.
            </p>
            <Link to="/contact" className="background__details-main-link">
              Get in Touch
            </Link>
          </div>
          <div className="col-md-4 background__details-secondary">
            <h3>Find a Courses and Join Us </h3>
            <ContactForm />
            <h4>We will get back at you within 24hrs.</h4>
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default MainBanner
