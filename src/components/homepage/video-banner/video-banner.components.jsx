import React from "react"
import { Link } from "gatsby"
import video from "./../../../images/video.mp4"
import "./video.styles.scss"
import ContactForm from "../../form/form.components"

const VideoBanner = () => {
  return (
    <>
      <video
        className="video-background"
        height="100%"
        width="100%"
        loop
        muted
        autoPlay
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="row video-background__details">
        <div className="col-md-8 video-background__details-main">
          <h1>
            Education Courses. <span>Study For Better Future</span>
          </h1>
          <p>
            Onec Consequat Sapien Ut Leo Cursus Rhoncus. Nullam Dui Mi,
            Vulputate Ac Metus Semper Nullam Dui Mi. Vestibulum Ante. Morbi At
            Dui Nisl.
          </p>
          <Link to="/about" className="video-background__details-main-link">
            Read More
          </Link>
        </div>
        <div className="col-md-4 video-background__details-secondary">
          <h3>Find a Courses and Join Us </h3>
          <ContactForm />
          <h4>We will get back at you within 24hrs.</h4>
        </div>
      </div>
    </>
  )
}

export default VideoBanner
