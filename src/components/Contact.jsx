import React from 'react'
import linkedin from "../assets/linkedin.png"
import email from "../assets/email.png"
import X from '../assets/x.png'

const Contact = () => {
  return (
    <div>
        <section id="contact">
            <p className="section__text__p1">Get in Touch</p>
            <h1 className="title">Contact Me</h1>
            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                    <img
                    src={email}
                    alt="Email icon"
                    className="icon contact-icon email-icon"
                    />
                    <p><a href="mailto:examplemail@gmail.com">abdullah.niazi.skipq@gmail.com</a></p>
                </div>
                <div className="contact-info-container">
                    <img
                    src={linkedin}
                    alt="LinkedIn icon"
                    className="icon contact-icon"
                    />
                    <p><a href="https://www.linkedin.com/in/abdullah-niazi-155a9823b/">LinkedIn</a></p>
                </div>
                <div className="contact-info-container">
                    <img
                    src={X}
                    alt="X icon"
                    className="icon contact-icon"
                    />
                    <p><a href="https://twitter.com/AbdullahWebDev">X</a></p>
                </div>
            </div>
        </section>
        <footer>
            <nav>
            <div className="nav-links-container">
                <ul className="nav-links">
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            </nav>
        </footer>
    </div>
  )
}
export default Contact;