import React from "react"
import "./about-main.styles.scss"
import { BiCheckCircle } from "react-icons/bi"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
const getBackImages = graphql`
  query {
    fluid: file(relativePath: { eq: "dark.webp" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const AboutMain = () => {
  const data = useStaticQuery(getBackImages)
  return (
    <div className="container-fluid about-main">
      <div className="row">
        <div className=" col-md-6 about-main__details">
          <h3>About our institute</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            incidunt, similique alias, corporis vero praesentium sunt iure sint
            temporibus fugiat facere mollitia! Id, odit quaerat voluptas fuga
            perspiciatis sit maxime?
          </p>
          <p>
            <span className="about-main__details--icon">
              <BiCheckCircle />
            </span>
            <span>
              Small enough to care, large enough to deliver excellence
            </span>
          </p>
          <p>
            <span className="about-main__details--icon">
              <BiCheckCircle />
            </span>
            <span>Trusted advice, imaginative solutions</span>
          </p>
          <p>
            <span className="about-main__details--icon">
              <BiCheckCircle />
            </span>
            <span>An accessible team.</span>
          </p>
          <p>
            <span className="about-main__details--icon">
              <BiCheckCircle />
            </span>
            <span>Ensuring a smooth transition.</span>
          </p>
        </div>
        <div className="col-md-6 about-main__img">
          <Img fluid={data.fluid.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  )
}

export default AboutMain
