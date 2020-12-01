import React from "react"
import "./form.styles.scss"
const ContactForm = () => {
  return (
    <>
      <section className="contact">
        <form
          className="form"
          action="https://formspree.io/f/xwkwbyeo"
          method="POST"
        >
          <div>
            <input
              type="text"
              name="course"
              id="course"
              className="formControl"
              placeholder="Course Name"
            />
          </div>
          <div>
            <input
              type="text"
              name="level"
              id="level"
              className="formControl"
              placeholder="Level: +2, bachelor"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className="fromControl"
              placeholder="Email@gmail.com"
            />
          </div>
          <div>
            <input
              type="text"
              name="number"
              id="number"
              className="fromControl"
              placeholder="+977 9860124286"
              required
            />
          </div>

          <div>
            <input type="submit" value="submit here" className="submit" />
          </div>
        </form>
      </section>
    </>
  )
}

export default ContactForm
