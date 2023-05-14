import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import '../../styles/style.css'

export default function Resume() {
  return (
    <div className="page-container">
      <div className="about-terminal terminal">
        <div className="terminal-bar">
          <FontAwesomeIcon icon={faCircle} id="terminal-red"/>
          <FontAwesomeIcon icon={faCircle} id="terminal-yellow"/>
          <FontAwesomeIcon icon={faCircle} id="terminal-green"/>
        </div>
        <div className="terminal-screen">
          <p className="text-left">phoenixouyang  $  <span className="text-right">cat aboutphoenix</span></p>
          <p className="text-left">aboutphoenix (main) $ <span className="text-right">Hi! My name is Phoenix. I'm an aspiring developer, currently enrolled in the University of Toronto coding bootcamp. I graduated from Wilfrid Laurier University in 2019 with an Honours Bachelors of Business Administration, specializing in Finance. I've had a few roles since graduating, but I'm currently working as a Financial Analyst at Ubisoft Toronto. Up until a few months ago, I was also working towards my CPA (as you can see, I've made quite the pivot from accounting). I wanted to explore a career that would give me the freedom to build things how I'd like. I've always been a logical person, and coding was something I had an interest in since university.</span></p>
        </div>
        
      </div>
      <div className="skills-terminal terminal">
        <div className="terminal-bar">
          <FontAwesomeIcon icon={faCircle} id="terminal-red"/>
          <FontAwesomeIcon icon={faCircle} id="terminal-yellow"/>
          <FontAwesomeIcon icon={faCircle} id="terminal-green"/>
        </div>
        <div className="terminal-screen">
        <p className="text-left">phoenixouyang  $  <span className="text-right">cd skills</span></p>
        <p className='text-left'>skills (main) & <span className='text-right'>ls</span></p>
        <p className='text-left'>languages</p>
        <ul className="text-ul">
          <li className='text-list'>Javascript</li>
          <li className='text-list'>HTML</li>
          <li className='text-list'>CSS</li>
        </ul>
        <p className='text-left'>frameworks</p>
        <ul className="text-ul">
          <li className='text-list'>React</li>
          <li className='text-list'>Express.js</li>
          <li className='text-list'>Bootstrap</li>
          <li className='text-list'>JQuery</li>
          <li className='text-list'>Bulma</li>
        </ul>
        <p className='text-left'>other</p>
        <ul className="text-ul">
          <li className='text-list'>MySQL</li>
          <li className='text-list'>MongoDB</li>
          <li className='text-list'>Heroku</li>
          <li className='text-list'>Git</li>
          <li className='text-list'>node.js</li>
        </ul>        
        </div>
      </div>
    </div>
  );
}
