import React, { useState, useEffect } from "react";
// import sun from "../Photo.jpg";
import LightModeIcon from '@mui/icons-material/LightMode';
// import moon from "../Photo.jpg";
import NightsStayIcon from '@mui/icons-material/NightsStay';

const NavBar = () => {
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  // const [modeIcon, setModeIcon] = useState(false);

  // const darkModeLightMode = () => {
  //   // var icon = document.getElementById("mode-icon");

  //   document.body.classList.toggle("dark-theme");
  //   if (document.body.classList.contains("dark-theme")) {
  //     setModeIcon(<LightModeIcon/>);
  //   } else {
  //     setModeIcon(<NightsStayIcon/>);
  //   }
  // };
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check the initial theme
    if (document.body.classList.contains("dark-theme")) {
      setDarkMode(true);
    }
  }, []);

  const darkModeLightMode = () => {
    if (document.body.classList.contains("dark-theme")) {
      document.body.classList.remove("dark-theme");
      setDarkMode(false);
    } else {
      document.body.classList.add("dark-theme");
      setDarkMode(true);
    }
  };

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo" data-aos="fade-down">
          Nitesh Tiwari
        </div>
        <div>
          <ul className="nav-links">
            <li
              data-aos="fade-down"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
            >
              <a href="#about">About</a>
            </li>
            <li
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <a href="#experience">Skills</a>
            </li>
            <li
              data-aos="fade-down"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
            >
              <a href="#projects">Projects</a>
            </li>
            <li
              data-aos="fade-down"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
            >
              <a href="#contact">Contact</a>
            </li>
            <li
              data-aos="fade-down"
              data-aos-duration="2500"
              data-aos-easing="ease-in-out"
            >
              {/* <img
                src={modeIcon ? LightModeIcon : NightsStayIcon}
                id="mode-icon"
                alt=""
                onClick={darkModeLightMode}
              /> */}
              <div onClick={darkModeLightMode} id="mode-icon"
                className="mode-icon" style={{ cursor: 'pointer' }}>
                {darkMode ? (
                  <LightModeIcon style={{ fontSize: 40, color: 'yellow' }} />
                ) : (
                  <NightsStayIcon style={{ fontSize: 40, color: 'black' }} />
                )}
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav" data-aos="fade-down">
        <div className="logo">Nitesh Tiwari</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleMenu}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
            <li>
              {/* <img
                src={modeIcon}
                id="mode-icon"
                className="mode-icon"
                alt=""
                onClick={darkModeLightMode}
              /> */}
              <div id="mode-icon"
                className="mode-icon" 
              onClick={darkModeLightMode} style={{ cursor: 'pointer' }}>
                {darkMode ? (
                  <LightModeIcon style={{ fontSize: 40, color: 'yellow' }} />
                ) : (
                  <NightsStayIcon style={{ fontSize: 40, color: 'black' }} />
                )}
              </div>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
