import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import '../../styles/style.css'

export default function Resume() {
  return (
    <container className="page-container">
      <div className="about-terminal terminal">
        <div className="terminal-bar">
          <FontAwesomeIcon icon={faCircle} id="terminal-red"/>
          <FontAwesomeIcon icon={faCircle} id="terminal-yellow"/>
          <FontAwesomeIcon icon={faCircle} id="terminal-green"/>
        </div>
        <div className="terminal-screen">

        </div>
        
      </div>
      <div className="skills-terminal terminal">
        <div className="terminal-bar">
          <FontAwesomeIcon icon={faCircle} id="terminal-red"/>
          <FontAwesomeIcon icon={faCircle} id="terminal-yellow"/>
          <FontAwesomeIcon icon={faCircle} id="terminal-green"/>
        </div>
        <div className="terminal-screen">

        </div>
      </div>
    </container>
  );
}
