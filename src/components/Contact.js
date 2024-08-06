import React from "react";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Call from "@material-ui/icons/Call";

const Contact = () => {
  return (
    <section id="contact">
      <p
        className="section__text__p1"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        Get in Touch
      </p>
      <h1 className="title" data-aos="fade-up" data-aos-duration="2000">
        Contact Me
      </h1>
      <div
        className="contact-info-upper-container"
        data-aos="zoom-out"
        data-aos-duration="4000"
      >
        <div className="contact-info-container">
          <Call/>
          <p>
            <a href="tel:8928124844">8928124844</a>
          </p>
        </div>
        <div className="contact-info-container">
          <MailOutlineIcon/>
          <p>
            <a href="mailto:tiwarinitesh667@gmail.com">tiwarinitesh667@gmail.com</a>
          </p>
        </div>
        <div className="contact-info-container">
          <LinkedInIcon/>
          <p>
            <a
              href="https://www.linkedin.com/in/nitesh-tiwari89/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
