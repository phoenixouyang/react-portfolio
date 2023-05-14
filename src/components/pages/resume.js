import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

export default function Resume() {
  return (
    <container className="page-container">
      <div className="about-terminal">
        <div className="terminal-bar">
          <FontAwesomeIcon icon={faCircle} id="terminal-red"/>
          <FontAwesomeIcon icon={faCircle} id="terminal-yellow"/>
          <FontAwesomeIcon icon={faCircle} id="terminal-green"/>
        </div>
        <div className="terminal-screen">

        </div>
        
      </div>
      <div className="skills-terminal">
        <div className="terminal-bar">

        </div>
        <div className="terminal-screen">

        </div>
      </div>
    </container>
  );
}
