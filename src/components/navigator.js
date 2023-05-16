import React from 'react';
import "../styles/navigator.css"
import phoenix from "./images/phoenix.png"

function Navigator({ currentPage, handlePageChange }) {
  return (
    <div className="header-container">
      <div>
        <img alt="phoenix bird" className="phoenix-logo" src={phoenix}></img>
        <span className="header-name">Phoenix Ouyang</span>
      </div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#about-me"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
            id="nav-text"
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
            id="nav-text"
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} 
            id="nav-text"
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} 
            id="nav-text"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navigator;
