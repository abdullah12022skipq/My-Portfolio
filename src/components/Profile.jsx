import React from 'react';
import profile from "../assets/profile-pic.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import resume from "../assets/Abdullah's Resume.pdf";

const Profile = () => {
  const openResume = () => {
    window.open(resume);
  };

  const goToContact = () => {
    window.location.href = './#contact';
  };

  const openLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com/in/abdullah-niazi-155a9823b/';
  };

  const openGitHub = () => {
    window.location.href = 'https://github.com/abdullah12022skipq';
  };

  return (
    <div>
      <section id="profile">
        <div className="section__pic-container">
          <img src={profile} alt="Abdullah profile" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Abdullah Niazi</h1>
          <p className="section__text__p2">Web Developer</p>
          <div className="btn-container">
            <button className="btn btn-color-2" onClick={openResume}>
              Download CV
            </button>
            <button className="btn btn-color-1" onClick={goToContact}>
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={linkedin}
              alt="My LinkedIn profile"
              className="icon"
              onClick={openLinkedIn}
            />
            <img
              src={github}
              alt="My Github profile"
              className="icon"
              onClick={openGitHub}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;