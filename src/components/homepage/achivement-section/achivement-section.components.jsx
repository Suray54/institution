import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import "./achivement-section.styles.scss"
import { HiOutlineEmojiHappy } from "react-icons/hi"
const getBackImages = graphql`
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
const AchivementSection = () => {
  const data = useStaticQuery(getBackImages)
  return (
    <>
      <BackgroundImage
        tag="section"
        className="achivement-section"
        fluid={data.backgroundImage.childImageSharp.fluid}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 achivement-section__main">
              <HiOutlineEmojiHappy className="achivement-section__main-icon" />
              <h1>150</h1>
              <p>current Students</p>
            </div>
            <div className="col-md-3 achivement-section__main">
              <HiOutlineEmojiHappy className="achivement-section__main-icon" />
              <h1>150</h1>
              <p>Courses</p>
            </div>
            <div className="col-md-3 achivement-section__main">
              <HiOutlineEmojiHappy className="achivement-section__main-icon" />
              <h1>150</h1>
              <p>Certified Teachers</p>
            </div>
            <div className="col-md-3 achivement-section__main">
              <HiOutlineEmojiHappy className="achivement-section__main-icon" />
              <h1>550</h1>
              <p>Graduated Students</p>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </>
  )
}

export default AchivementSection
