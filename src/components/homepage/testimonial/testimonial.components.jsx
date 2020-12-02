import React from "react"
import "./testimonial.styles.scss"
import anup from "../../../images/anup.jpg"
import banner from "./../../../images/library.jpg"
function Testimonials() {
  return (
    <div
      className=" testimonials"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <h2>What our Students say</h2>

      <div id="demo" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h3>
              <span>
                <i class="fa fa-quote-left"></i>
              </span>
              I have worked with Suranjan Rai and known him for more than 5
              years. Rai understands the needs of a startup - he's reliable,
              flexible and consistently delivers a valuable service. He's a
              smart guy who loves to problem solve with fresh ideas. As a bonus,
              he's absolute pleasure to work with.
            </h3>
            <img src={anup} alt="" />
            <p>- Anup Maharjan</p>
          </div>
          <div className="carousel-item">
            <h3>
              <span>
                <i className="fa fa-quote-left"></i>
              </span>
              It is very crucial for a person to have good communication skills
              in order to work in a group. We were able to work coherently and
              made the project a huge success. Being a technology enthusiast he
              is up-to-date with new technology and provides wide range of
              services. I was glad I chose right person to work with.
            </h3>
            <img src={anup} alt="student" />
            <p>- Sushil Shrestha</p>
          </div>
          <div className="carousel-item">
            <h3>
              <span>
                <i className="fa fa-quote-left"></i>
              </span>
              It is very crucial for a person to have good communication skills
              in order to work in a group. We were able to work coherently and
              made the project a huge success. Being a technology enthusiast he
              is up-to-date with new technology and provides wide range of
              services. I was glad I chose right person to work with.
            </h3>
            <img src={anup} alt="student" />
            <p>- Sushil Shrestha</p>
          </div>
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </div>
  )
}
export default Testimonials
