import React from 'react';
import vetSetGo from '../images/vet-set-go-homepage.png';
import weatherApp from '../images/weather-demo.png';
import codingQuiz from '../images/coding-quiz.png';
import totallyReal from '../images/totally-real-business.png';
import developersDen from '../images/the-developers-den.png';
import workdayScheduler from '../images/workday-scheduler.png';
import employeeTracker from '../images/employee-tracker.jpg';
import ecommerceBackend from '../images/ecommerce-backend.jpg';
import blub from '../images/blub.png';
import '../../styles/style.css'



export default function Portfolio() {
  return (
    <div className="page-container">
      <h1 className="page-title">Check out some of my works below:</h1>
      <container className="portfolio-box">
        {/* Blub - a Chat Application */}
        <div className="app-box">
          <img className="app-pic" src={blub} alt="Blub chat application screenshot"/>
          <div className="app-text">
            <h4 className="app-title">Blub - A Chat Application</h4>
            <div className="app-links">
              <a href="https://blub.herokuapp.com/">Deployed Application</a>
              <a href="https://github.com/UTOR-Group-6/messaging-app">Github Repository</a>
            </div>
          </div>
        </div>

        {/* Vet Set Go */}
        <div className="app-box">
          <img className="app-pic" src={vetSetGo} alt="Vet Set Go application screenshot"/>
          <div className="app-text">
            <h4 className="app-title">Vet Set Go</h4>
            <div className="app-links">
              <a href="https://vet-set-go.herokuapp.com/">Deployed Application</a>
              <a href="https://github.com/Project2Group1/vet-set-go">Github Repository</a>
            </div>
          </div>
        </div>

        {/* Weather Dashboard */}
        <div className="app-box">
          <img className="app-pic" src={weatherApp} alt="Weather Dashboard application screenshot"/>
          <div className="app-text">
            <h4 className="app-title">Weather Dashboard</h4>
            <div className="app-links">
              <a href="https://phoenixouyang.github.io/weather-dashboard/">Deployed Application</a>
              <a href="https://github.com/phoenixouyang/weather-dashboard">Github Repository</a>
            </div>
          </div>
        </div>

        {/* Developers Den */}
        <div className="app-box">
          <img className="app-pic" src={developersDen} alt="The Developers Den application screenshot"/>
          <div className="app-text">
            <h4 className="app-title">The Developer's Den</h4>
            <div className="app-links">
              <a href="https://salty-wave-32472.herokuapp.com/">Deployed Application</a>
              <a href="https://github.com/phoenixouyang/tech-blog-TheDevDen">Github Repository</a>
            </div>
          </div>
        </div>

        {/* Totally Real Business */}
        <div className="app-box">
          <img className="app-pic" src={totallyReal} alt="Totally Real application screenshot"/>
          <div className="app-text">
            <h4 className="app-title">Totally Real Business Page</h4>
            <div className="app-links">
              <a href="https://phoenixouyang.github.io/odin-tr-business/">Deployed Application</a>
              <a href="https://github.com/phoenixouyang/odin-tr-business">Github Repository</a>
            </div>
          </div>
        </div>

        {/* Coding Quiz */}
        <div className="app-box">
          <img className="app-pic" src={codingQuiz} alt="Coding Quiz application screenshot"/>
          <div className="app-text">
            <h4 className="app-title">Coding Quiz</h4>
            <div className="app-links">
              <a href="https://phoenixouyang.github.io/code-quiz/">Deployed Application</a>
              <a href="https://github.com/phoenixouyang/code-quiz">Github Repository</a>
            </div>
          </div>
        </div>

        {/* Workday Scheduler */}
        <div className="app-box">
          <img className="app-pic" src={workdayScheduler} alt="Workday Scheduler application screenshot"/>
          <div className="app-text">
            <h4 className="app-title">Workday Scheduler</h4>
            <div className="app-links">
              <a href="https://phoenixouyang.github.io/work-day-scheduler/">Deployed Application</a>
              <a href="https://github.com/phoenixouyang/work-day-scheduler">Github Repository</a>
            </div>
          </div>
        </div>

        {/* Employee Tracker */}
        <div className="app-box">
          <img className="app-pic" src={employeeTracker} alt="Employee Tracker application screenshot"/>
          <div className="app-text">
            <h4 className="app-title">Employee Tracker</h4>
            <div className="app-links">
              <a href="https://github.com/phoenixouyang/employee-tracker">Github Repository</a>
            </div>
          </div>
        </div>        

        {/* E-Commerce Backend */}
        <div className="app-box">
          <img className="app-pic" src={ecommerceBackend} alt="E-Commerce Backend application screenshot"/>
          <div className="app-text">
            <h4 className="app-title">E-Commerce Back End</h4>
            <div className="app-links">
              <a href="https://github.com/phoenixouyang/ecommerce-back-end">Github Repository</a>
            </div>
          </div>
        </div>    
      </container>
    </div>
  );
}
