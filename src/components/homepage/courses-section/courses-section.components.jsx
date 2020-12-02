import React from "react"
import { BsLaptop } from "react-icons/bs"
import { Link } from "gatsby"
import "./courses-section.styles.scss"
const CoursesSection = () => {
  return (
    <>
      <div className="container-fluid courses-section">
        <h3>Why Choose Us</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium
          sed cumque voluptates temporibus fugit magnam illo placeat maiores?
        </p>
        <div className="row ">
          <div className="col-lg-2 col-md-3 col-sm-6 courses-section__grid ">
            <Link to="/contact" className="courses-section__main">
              <BsLaptop className="courses-section__main-link" />
              <h1>+2</h1>
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 courses-section__grid ">
            <Link to="/contact" className="courses-section__main">
              <BsLaptop className="courses-section__main-link" />
              <h1>+2</h1>
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 courses-section__grid ">
            <Link to="/contact" className="courses-section__main">
              <BsLaptop className="courses-section__main-link" />
              <h1>+2</h1>
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 courses-section__grid ">
            <Link to="/contact" className="courses-section__main">
              <BsLaptop className="courses-section__main-link" />
              <h1>+2</h1>
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 courses-section__grid ">
            <Link to="/contact" className="courses-section__main">
              <BsLaptop className="courses-section__main-link" />
              <h1>+2</h1>
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 courses-section__grid ">
            <Link to="/contact" className="courses-section__main">
              <BsLaptop className="courses-section__main-link" />
              <h1>+2</h1>
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 courses-section__grid ">
            <Link to="/contact" className="courses-section__main">
              <BsLaptop className="courses-section__main-link" />
              <h1>+2</h1>
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 courses-section__grid ">
            <Link to="/contact" className="courses-section__main">
              <BsLaptop className="courses-section__main-link" />
              <h1>+2</h1>
            </Link>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 courses-section__grid ">
            <Link to="/contact" className="courses-section__main">
              <BsLaptop className="courses-section__main-link" />
              <h1>+2</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CoursesSection
