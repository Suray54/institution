import React from "react"
import "./services-section.styles.scss"
import { BsLaptop } from "react-icons/bs"
const ServicesSection = () => {
  return (
    <>
      <div className="container-fluid services-section">
        <h3>What we offer</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          cumque ab eum id sunt accusamus officia, architecto eos quas
          accusantium veritatis recusandae assumenda dolorum omnis pariatur, nam
          dolorem sequi est?
        </p>
        <div className="row">
          <div className="col-md-4 services-section__details">
            <BsLaptop className="services-section__details-icon" />
            <h2>High Quality Teacher</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Praesentium officiis eum dolor soluta adipisci repellendus fugiat
              numquam nulla nesciunt.
            </p>
          </div>
          <div className="col-md-4 services-section__details">
            <BsLaptop className="services-section__details-icon" />
            <h2>High Quality Teacher</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Praesentium officiis eum dolor soluta adipisci repellendus fugiat
              numquam nulla nesciunt.
            </p>
          </div>
          <div className="col-md-4 services-section__details">
            <BsLaptop className="services-section__details-icon" />
            <h2>High Quality Teacher</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Praesentium officiis eum dolor soluta adipisci repellendus fugiat
              numquam nulla nesciunt.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServicesSection
