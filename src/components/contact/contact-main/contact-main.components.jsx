import React from "react"
import "./contact-main.styles.scss"
import { FaFacebook, FaTwitterSquare, FaLinkedin } from "react-icons/fa"
import { BsLaptop } from "react-icons/bs"
import ContactForm from "../contact-form/contact-form.components"
const ContactMain = () => {
  return (
    <div className="container-fluid contact-main">
      <div className="row">
        <div className="col-md-4 contact-main__details">
          <ul>
            <li>
              <h3 className="contact-main__details-header">
                Address: <span>PO Box 1212, California, US</span>
              </h3>
              <BsLaptop className="contact-main__details-link" />
            </li>
            <li>
              <h3 className="contact-main__details-header">
                Email: <span>info.institute@gmail.com</span>
              </h3>
              <BsLaptop className="contact-main__details-link" />
            </li>
            <li>
              <h3 className="contact-main__details-header">
                phone: <span>+977 9860124286, 01 40108082 </span>
              </h3>
              <BsLaptop className="contact-main__details-link" />
            </li>
            <li>
              <h3 className="contact-main__details-header">
                follow us on:
                <div className="contact-main__details--social">
                  <a
                    href="https://www.facebook.com/SSPRM-101597375062586"
                    rel="nofollow"
                    className="contact-main__details--social-1"
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href="https://twitter.com/RaiSuranjan"
                    rel="nofollow"
                    className="contact-main__details--social-1"
                  >
                    <FaTwitterSquare />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/suranjan-rai-991309136/"
                    rel="nofollow"
                    className="contact-main__details--social-1"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </h3>
            </li>
          </ul>
        </div>
        <div className="col-md-8 contact-main__form">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactMain
