import React, { Component } from "react"
import { FaHamburger } from "react-icons/fa"
import logo from "../../../images/logo.webp"
import "./navbar.styles.scss"
import { Link } from "gatsby"
export class Navbar extends Component {
  componentDidMount() {
    let $
    if (typeof window !== "undefined" && window) {
      $ = require("jquery")
    }
    $(window).scroll(function () {
      if ($(document).scrollTop() > 40) {
        $(".navbar").addClass("affix")
      } else {
        $(".navbar").removeClass("affix")
      }
    })
  }

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-md sticky-top">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <FaHamburger />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav  ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/courses">
                  courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">
                  gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    )
  }
}

export default Navbar
