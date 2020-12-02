import React, { Component } from "react"
import "./footer.styles.scss"
import { Link } from "gatsby"
import { FaFacebook, FaTwitterSquare, FaSquarespace } from "react-icons/fa"
export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="row">
          <div className="col-lg-5 footer__details">
            <h3>About Institute</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              recusandae at consequatur illum quas totam aperiam laboriosam
              architecto, quia velit harum facere praesentium. Soluta sunt
              mollitia ducimus ab ad impedit!
            </p>
            <div className="footer__details--social">
              <a
                href="https://www.facebook.com/SSPRM-101597375062586"
                rel="nofollow"
                className="footer__details--social-1"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com/RaiSuranjan"
                rel="nofollow"
                className="footer__details--social-1"
              >
                <FaTwitterSquare />
              </a>
              <a
                href="https://www.linkedin.com/in/suranjan-rai-991309136/"
                rel="nofollow"
                className="footer__details--social-1"
              >
                <FaSquarespace />
              </a>
            </div>
          </div>
          <div className="col-lg-4 footer__details">
            <h3>Contact Info</h3>
            <p>
              <span className="main">Address:</span>
              <span className="main-details">Jorpatu, Kathmandu, Nepal</span>
            </p>
            <p>
              <span className="main">Telephone:</span>
              <span className="main-details">
                <a href="tel:9063440005">+977 9860124286</a>
              </span>
            </p>
            <p>
              <span className="main">Email:</span>
              <span className="main-details">
                <a href="mailto:m.bluth@example.com">
                  info.institute@gmail.com
                </a>
              </span>
            </p>
          </div>
          <div className="col-lg-3 footer__details">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link className="footer__details--links" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="footer__details--links" to="/about">
                  About
                </Link>
              </li>

              <li>
                <Link className="footer__details--links" to="/courses">
                  courses
                </Link>
              </li>
              <li>
                <Link className="footer__details--links" to="/gallery">
                  gallery
                </Link>
              </li>
              <li>
                <Link className="footer__details--links" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__end">
          <p>
            Copyright &#169; {new Date().getFullYear()} all rights reserved by
            Institute | designed & developed by
            <a href="https://suray54.github.io/Rezume/">Suranjan rai</a>
          </p>
        </div>
      </div>
    )
  }
}

export default Footer
