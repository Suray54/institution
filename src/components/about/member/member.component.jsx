import React from "react"
import "./member.styles.scss"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
const getBackImages = graphql`
  query {
    first: file(relativePath: { eq: "dark.webp" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
const Member = () => {
  const data = useStaticQuery(getBackImages)
  return (
    <div className="member">
      <h3>Our skilled staffs</h3>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta dolor
        optio facilis quaerat! Maxime possimus placeat velit exercitationem sit
        ducimus sint expedita inventore porro nihil officiis autem, sed ad
        facilis!
      </p>
      <div className="row">
        <div className="col-md-4 member__details">
          <Img fixed={data.first.childImageSharp.fixed} />
          <h2>
            Rajan Shapkota <span>Teacher in math</span>
          </h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts
          </p>
        </div>
        <div className="col-md-4 member__details">
          <Img fixed={data.first.childImageSharp.fixed} />
          <h2>
            Rajan Shapkota <span>Teacher in math</span>
          </h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts
          </p>
        </div>
        <div className="col-md-4 member__details">
          <Img fixed={data.first.childImageSharp.fixed} />
          <h2>
            Rajan Shapkota <span>Teacher in math</span>
          </h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts
          </p>
        </div>
      </div>
    </div>
  )
}

export default Member
