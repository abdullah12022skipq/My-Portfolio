import React from 'react'
import experience from "../assets/experience.png"
import education from "../assets/education.png"
import arrow from "../assets/arrow.png"

const About = () => {
    const goToExperience = () => {
        window.location.href = './#experience';
      };
  return (
    <div>
        <section id="about">
            <p className="section__text__p1">Get To Know More</p>
            <h1 className="title">About Me</h1>
            <div className="section-container">
            <div className="about-details-container">
                <div className="about-containers">
                    <div className="details-container">
                        <img
                        src={experience}
                        alt="Experience icon"
                        className="icon"
                        />
                        <h3>Experience</h3>
                        <p>9 Months <br />Web Development</p>
                    </div>
                    <div className="details-container">
                        <img
                        src={experience}
                        alt="Experience icon"
                        className="icon"
                        />
                        <h3>Education</h3>
                        <p>B.Sc. Bachelors Degree - COMSATS</p>
                    </div>
                    <div className="details-container">
                        <img
                        src={education}
                        alt="Education icon"
                        className="icon"
                        />
                        <h3>Certification</h3>
                        <p>Programming with JavaScript - <i>Meta</i> <br/>
                            Introduction to Front- End Development - <i>Meta</i> <br/>
                            Developing Back- End Apps with Node.js and Express - <i>IBM</i> <br/>
                            React Basics - <i>Meta</i> <br/>
                            Advanced React - <i>Meta</i> <br/></p>
                    </div>
                </div>
                <div className="text-container">
                <p>
                A passionate web developer with a strong background in HTML, CSS, and JavaScript. Have experience developing and designing websites of all sizes, from simple personal websites to complex enterprise applications. Also proficient in a variety of other technologies, including React, Node.js etc.
                Always looking for new challenges and opportunities to learn and grow.
                </p>
                </div>
            </div>
            </div>
            <img
            src={arrow}
            alt="Arrow icon"
            className="icon arrow"
            onClick={goToExperience}
            />
        </section>
    </div>
  )
}

export default About;