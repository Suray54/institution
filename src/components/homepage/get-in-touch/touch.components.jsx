import React from "react"
import "./touch.styles.scss"
const GetInTouch = () => {
  return (
    <div className="container-fluid ">
      <div className="row contact-banner">
        <div className="col-md-8 contact-banner__get-in-touch">
          <h1>Get in touch</h1>
          <p>
            We offer clear, comprehensive information and personalised advice on
            which options might best fit your lifestyle and needs. Call us using
            Viber, WhatsApp or imo.
          </p>
        </div>
        <div className="col-md-4 contact-banner__call-us-on">
          <h1>
            Contact Us on
            <span>
              <a href="tel:9060124286"> 9860124286</a>
            </span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default GetInTouch
