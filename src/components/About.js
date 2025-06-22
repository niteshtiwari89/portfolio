import React from "react";
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1" data-aos="fade-up">
        Get To Know More
      </p>
      <h1 className="title" data-aos="fade-up">
        About Me
      </h1>
      <div className="section-container">
        <div className="about-details-container">
          <div className="about-containers">
            <div
              className="details-container"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <WorkIcon />
              <h3>Experience</h3>
              <p>
              Software Developer Intern<br />@ DevBee IT Solutions
                International Pvt. Ltd. Nagpur.{" "}
              </p>
            </div>
            <div
              className="details-container"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <WorkIcon />
              <h3>Experience</h3>
              <p>
              Software Developer Intern<br />@ DevBee IT Solutions
                International Pvt. Ltd. Nagpur.{" "}
              </p>
            </div>
            <div
              className="details-container"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <WorkIcon />
              <h3>Experience</h3>
              <p>
              Software Developer Intern<br />@ DevBee IT Solutions
                International Pvt. Ltd. Nagpur.{" "}
              </p>
            </div>
            <div
              className="details-container"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <SchoolIcon />
              <h3>Education</h3>
              <p>
                Masters In Computer Application
                <br />
                Bachelors of Science(Information Technology)
              </p>
            </div>
          </div>
          <div className="text-container">
            <p data-aos="zoom-in" data-aos-duration="1000">I am deeply passionate about web development. 
              I bring a mix of creativity, problem-solving skills, and a strong commitment to learning
              and growing in the tech field. My goal is to master the MERN stack, 
              driven by my enthusiasm for creating innovative solutions and staying current with the latest trends in web development.
              With proficiency in the MERN stack, experience in modern web technologies like React.js, Node.js, MongoDB, Material-UI, and Express.js,
              and the development of a School Inventory Management System that showcases my ability to build full-stack applications with robust CRUD functionalities,
              I am dedicated to continuous improvement and delivering user-friendly applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
