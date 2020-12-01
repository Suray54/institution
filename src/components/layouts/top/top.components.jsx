import React from "react"
import { Link } from "gatsby"
import "./top.styles.scss"
import { HiOutlineMail } from "react-icons/hi"
import { BiPhone } from "react-icons/bi"
const Top = () => {
  return (
    <div className="top">
      <div className="top__details">
        <h3 className="top__details--email">
          <span>
            <HiOutlineMail />
          </span>
          abc@gmail.com
        </h3>
        <h3 className="top__details--phone">
          <a href="tel:9063440005">
            <span>
              <BiPhone />
            </span>
            +977 9860124286
          </a>
        </h3>
      </div>
      <div className="top__apply">
        <Link className="top__apply--link" to="/contact">
          Apply Now
        </Link>
      </div>
    </div>
  )
}

export default Top
