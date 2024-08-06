import React from "react";
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const Footer = () => {
  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li data-aos="fade-up">
              <a href="#home"><KeyboardDoubleArrowUpIcon fontSize="large"/></a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
