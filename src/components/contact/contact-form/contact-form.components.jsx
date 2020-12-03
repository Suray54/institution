import React from "react"
import "./contact-form.styles.scss"
const ContactForm = () => {
  return (
    <div className="contact-form">
      <form
        className="form"
        action="https://formspree.io/f/xwkwbyeo"
        method="POST"
      >
        <div>
          <input
            type="text"
            name="name"
            id="name"
            className="formControl"
            placeholder="Name"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            id="email"
            className="fromControl"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="number"
            name="number"
            id="number"
            className="fromControl"
            placeholder="Phone Number"
            required
          />
        </div>
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          className="fromControl"
          required
        ></textarea>
        <div>
          <input type="submit" value="submit here" className="submit" />
        </div>
      </form>
    </div>
  )
}

export default ContactForm
