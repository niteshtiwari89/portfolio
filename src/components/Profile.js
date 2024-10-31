import React from "react";
import Image from "../Photo.jpg";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img
          src={Image}
          alt="profile-pic"
          id="profile-logo"
          data-aos="fade-right"
          data-aos-delay="50"
        />
      </div>
      <div className="section__text" data-aos="fade-left" data-aos-delay="50">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Nitesh Tiwari</h1>
        <p className="section__text__p2">Software Developer</p>
        <div className="btn-container">
          <a
            href="https://drive.google.com/file/d/1DVVmOnhnMVrkJgpvlVUcAu5_SYfw_Nbs/view?usp=sharing"
            download="NiteshTiwariResume"
            type="pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button
              className="btn btn-color-2"
              >
              Download CV
            </button>
          </a>
          <button
            className="btn btn-color-1"
            onClick={() => (window.location.href = "./#contact")}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <a
            href="https://www.linkedin.com/in/nitesh-tiwari89/"
            type="link"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon/>
          </a>
          <a
            href="https://github.com/NiteshTiwari89/"
            type="link"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
