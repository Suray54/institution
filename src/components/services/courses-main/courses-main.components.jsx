import React from "react"
import { BsLaptop } from "react-icons/bs"
import { Link } from "gatsby"
import "./courses-main.styles.scss"
const CoursesMain = () => {
  return (
    <div className="container-fluid courses-main">
      <h3>All Our Courses</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
        atque id odit neque soluta animi, in, eius et iste ab impedit sit
        pariatur ratione recusandae porro esse? Sequi, commodi facere?
      </p>
      <div className="row ">
        <div className="col-lg-2 col-md-3 col-sm-6 courses-main__grid ">
          <Link to="/contact" className="courses-main__main">
            <BsLaptop className="courses-main__main-link" />
            <h1>+2</h1>
          </Link>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 courses-main__grid ">
          <Link to="/contact" className="courses-main__main">
            <BsLaptop className="courses-main__main-link" />
            <h1>+2</h1>
          </Link>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 courses-main__grid ">
          <Link to="/contact" className="courses-main__main">
            <BsLaptop className="courses-main__main-link" />
            <h1>+2</h1>
          </Link>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 courses-main__grid ">
          <Link to="/contact" className="courses-main__main">
            <BsLaptop className="courses-main__main-link" />
            <h1>+2</h1>
          </Link>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 courses-main__grid ">
          <Link to="/contact" className="courses-main__main">
            <BsLaptop className="courses-main__main-link" />
            <h1>+2</h1>
          </Link>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 courses-main__grid ">
          <Link to="/contact" className="courses-main__main">
            <BsLaptop className="courses-main__main-link" />
            <h1>+2</h1>
          </Link>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 courses-main__grid ">
          <Link to="/contact" className="courses-main__main">
            <BsLaptop className="courses-main__main-link" />
            <h1>+2</h1>
          </Link>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 courses-main__grid ">
          <Link to="/contact" className="courses-main__main">
            <BsLaptop className="courses-main__main-link" />
            <h1>+2</h1>
          </Link>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6 courses-main__grid ">
          <Link to="/contact" className="courses-main__main">
            <BsLaptop className="courses-main__main-link" />
            <h1>+2</h1>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CoursesMain
