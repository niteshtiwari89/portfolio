import React from "react";
import HTML from "../images/html.png";
import CSS from "../images/css.png";
import JS from "../images/javascript.png";
import EX from "../images/express.png";
import REACT from "../images/reactjs.png";
import MUI from "../images/mui.png";
import NODE from "../images/nodejs.png";
import MONGODB from "../images/mongodb.png";
import GIT from "../images/git.png";
import JAVA from "../images/java.png";

const Experience = () => {
  const Frontend = [
    { name: "HTML5", src: HTML, experiences: "Intermediate", id: 0 },
    { name: "CSS3", src: CSS, experiences: "Intermediate", id: 1 },
    { name: "JavaScript", src: JS, experiences: "Intermediate", id: 2 },
    { name: "React JS", src: REACT, experiences: "Intermediate", id: 3},
    { name: "Material UI", src: MUI, experiences: "Intermediate", id: 4 },
  ];

  const Backend = [
    { name: "Node JS", src: NODE, experiences: "Intermediate", id: 0 },
    { name: "Express JS", src: EX, experiences: "Intermediate", id: 1 },
    { name: "MongoDB", src: MONGODB, experiences: "Intermediate", id: 2 },
    { name: "MongoDB Atlas", src: MONGODB, experiences: "Basic", id: 3 },
    { name: "Git", src: GIT, experiences: "Basic", id: 4 },
    { name: "Java", src: JAVA, experiences: "Intermediate", id: 5 },
  ];
  return (
    <section id="experience">
      <p className="section__text__p1" data-aos="fade-up">
        Explore My
      </p>
      <h1 className="title" data-aos="fade-up">
        Skills
      </h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div
            className="details-container"
            data-aos="zoom-in-down"
            data-aos-duration="1000"
          >
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {Frontend.map((skill) => (
                <article
                  key={skill.id}
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <img src={skill.src} alt="Experience icon" className="icon" />
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.experiences}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div
            className="details-container"
            data-aos="zoom-in-down"
            data-aos-duration="1000"
          >
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              {Backend.map((skill) => (
                <article
                  key={skill.id}
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <img src={skill.src} alt="Experience icon" className="icon" />
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.experiences}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <img
        // src={require("../assets/arrow.png")}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#projects")}
      />
    </section>
  );
};

export default Experience;
