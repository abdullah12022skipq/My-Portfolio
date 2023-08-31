import React from 'react'
import arrow from "../assets/arrow.png"
import project1 from "../assets/project-1.png"
import project2 from "../assets/project-2.png"
import project3 from "../assets/project-3.png"

const Projects = () => {
    const gotoContact = () => {
        window.location.href = './#contact'
    }
    const openYoutubeCommentsClassification = () => {
        window.location.href = 'https://github.com/abdullah12022skipq/YouTube-Comments-Classification'
    }
    const demoYoutubeCommentsClassification = () => {
        window.location.href = 'https://www.youtube.com/watch?v=sRJgNL3WHcg'
    }
    const openDigitalMediaApp = () => {
        window.location.href = 'https://github.com/abdullah12022skipq/Capstone-Project'
    }
    const openReactBookApp = () => {
        window.location.href = 'https://github.com/abdullah12022skipq/Eagle_MERN/tree/main/Abdullah_Niazi/sprint6/react-books-app'
    }
  return (
    <div>
        <section id="projects">
            <p className="section__text__p1">Browse My Recent</p>
            <h1 className="title">Projects</h1>
            <div className="experience-details-container">
            <div className="about-containers">
                <div className="details-container color-container">
                <div className="article-container">
                    <img
                    src={project1}
                    alt="Project 1"
                    className="project-img"
                    />
                </div>
                <h2 className="experience-sub-title project-title">Youtube Comments Classification</h2>
                <div className="btn-container">
                    <button
                    className="btn btn-color-2 project-btn"
                    onClick={openYoutubeCommentsClassification}
                    >
                    Github
                    </button>
                    <button
                    className="btn btn-color-2 project-btn"
                    onClick={demoYoutubeCommentsClassification}
                    >
                    Demo
                    </button>
                </div>
                </div>
                <div className="details-container color-container">
                <div className="article-container">
                    <img
                    src={project2}
                    alt="Project 2"
                    className="project-img"
                    />
                </div>
                <h2 className="experience-sub-title project-title">Digital Media App</h2>
                <div className="btn-container">
                    <button
                    className="btn btn-color-2 project-btn"
                    onClick={openDigitalMediaApp}
                    >
                    Github
                    </button>
                    {/* <button
                    className="btn btn-color-2 project-btn"
                    onclick="location.href='https://github.com/'"
                    >
                    Live Demo
                    </button> */}
                </div>
                </div>
                <div className="details-container color-container">
                <div className="article-container">
                    <img
                    src={project3}
                    alt="Project 3"
                    className="project-img"
                    />
                </div>
                <h2 className="experience-sub-title project-title">React Book App</h2>
                <div className="btn-container">
                    <button
                    className="btn btn-color-2 project-btn"
                    onClick={openReactBookApp}
                    >
                    Github
                    </button>
                    {/* <button
                    className="btn btn-color-2 project-btn"
                    onclick="location.href='https://github.com/'"
                    >
                    Live Demo
                    </button> */}
                </div>
                </div>
            </div>
            </div>
            <img
            src={arrow}
            alt="Arrow icon"
            className="icon arrow"
            onClick={gotoContact}
            />
        </section>
    </div>
  )
}
export default Projects;