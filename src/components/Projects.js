import React, { useRef } from "react";
import QuizApp from "../images/quiz.webp";
import TicTacToe from "../images/tic-tac-toe.png";
import Inventory from "../images/Inventory.png";

export default function Project() {
  const project = [
    {
      imageUrl: QuizApp,
      projectName: "Quiz App",
      id: 0,
      live: "https://niteshtiwari89.github.io/Quiz-App/",
      githubLink: "https://github.com/niteshtiwari89/Quiz-App",
    },
    {
      imageUrl: TicTacToe,
      projectName: "TicTacToe Game",
      id: 0,
      live: "https://niteshtiwari89.github.io/Tic-Tac-Toe/",
      githubLink: "https://github.com/niteshtiwari89/Tic-Tac-Toe",
    },
    {
      imageUrl: Inventory,
      projectName: "School Inventory Mangement System",
      id: 0,
      live: "https://school-inventory-management-system.vercel.app/",
      githubLink: "https://github.com/niteshtiwari89/school-inventory-management-system",
    }
  ];

  const cardsRef = useRef(null);

  const handleLeftClick = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += 140;
    }
  };

  const handleRightClick = () => {
    if (cardsRef.current) {
      cardsRef.current.scrollLeft -= 140;
    }
  };

  return (
    <section id="projects">
      <p className="section__text__p1" data-aos="fade-up">
        Browse My Recent
      </p>
      <h1 className="title" data-aos="fade-up">
        Projects
      </h1>
      <div className="experience-details-container">
        <div className="arrows">
          <i
            className="ri-arrow-left-s-line ri-4x iconColor left"
            onClick={handleLeftClick}
          ></i>
        </div>
        <div className="about-containers  sliderDiv" ref={cardsRef}>
          {project.map((pro) => (
            <div
              key={pro.id}
              className="details-container color-container card"
              data-aos="zoom-in-down"
            >
              <div className="article-container">
                <img
                  src={pro.imageUrl}
                  alt={pro.projectName}
                  className="project-img"
                />
              </div>
              <p className="experience-sub-title project-title">
                {pro.projectName}
              </p>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open(pro.githubLink, '_blank')}
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open(pro.live, '_blank')}
                >
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <i
            className="ri-arrow-right-s-line ri-4x iconColor right"
            onClick={handleRightClick}
          ></i>
        </div>
      </div>
      <img
        // src={require("../assets/arrow.png")}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#contact")}
      />
    </section>
  );
};

// export default Project;
