import React from "react"
import "./about-section.styles.scss"
const AboutSection = () => {
  return (
    <>
      <div className="container-fluid about-section">
        <div className="row">
          <div className="col-md-5 about-section__header">
            <h1>
              WELCOME TO <span>EDUCATION FLAVOUR US</span>
            </h1>
            <p>A COMPREHENSIVE IT TRAINING CENTER IN NEPAL</p>
          </div>
          <div className="col-md-7 about-section__detail">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              aut dolores alias, ea nulla possimus iste voluptatum, totam fugit
              fugiat assumenda architecto veniam facere voluptates, excepturi
              praesentium sed maxime tenetur!
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSection
