import React from "react"
import "./services-section.styles.scss"
import { Link } from "gatsby"
import { BsLaptop } from "react-icons/bs"
const ServicesSection = () => {
  return (
    <>
      <div className="container-fluid services-section">
        <h3>What we offer</h3>
        <div className="row">
          <div className="col-md-4">
            <div className="services-section__main">
              <BsLaptop className="services-section__main-icon" />
              <h2>Online Classes</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium officiis eum dolor soluta adipisci repellendus
                fugiat numquam nulla nesciunt.
              </p>
              <Link to="/services" className="services-section__main-link">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="services-section__main">
              <BsLaptop className="services-section__main-icon" />
              <h2>High Quality Teacher</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium officiis eum dolor soluta adipisci repellendus
                fugiat numquam nulla nesciunt.
              </p>
              <Link to="/services" className="services-section__main-link">
                Read More
              </Link>
            </div>
          </div>
          <div className="col-md-4">
            <div className="services-section__main">
              <BsLaptop className="services-section__main-icon" />
              <h2>Home Tutor</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium officiis eum dolor soluta adipisci repellendus
                fugiat numquam nulla nesciunt.
              </p>
              <Link to="/services" className="services-section__main-link">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesSection
