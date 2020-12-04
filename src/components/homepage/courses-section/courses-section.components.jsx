import React from "react"
import "./courses-section.styles.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from "gatsby"
const getBackImages = graphql`
  query {
    first: file(relativePath: { eq: "dark.webp" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const CoursesSection = () => {
  const data = useStaticQuery(getBackImages)
  return (
    <>
      <div className="container-fluid courses-section">
        <h3>What we Teach</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          sed cumque voluptates temporibus fugit magnam illo placeat maiores?
        </p>

        <div className="row">
          <div className="col-lg-4 ">
            <div className="courses-section__details">
              <Img fluid={data.first.childImageSharp.fluid} />
              <div className="courses-section__details-main">
                <h2>Robots in Space</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts
                </p>
                <Link to="/services" className=" courses-section__details-link">
                  Read more...
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 ">
            <div className="courses-section__details">
              <Img fluid={data.first.childImageSharp.fluid} />
              <div className="courses-section__details-main">
                <h2>Robots in Space</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts
                </p>
                <Link to="/services" className=" courses-section__details-link">
                  Read more...
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 ">
            <div className="courses-section__details">
              <Img fluid={data.first.childImageSharp.fluid} />
              <div className="courses-section__details-main">
                <h2>Robots in Space</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts
                </p>
                <Link to="/services" className=" courses-section__details-link">
                  Read more...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoursesSection
