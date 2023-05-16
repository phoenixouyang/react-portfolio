import React from 'react';
import '../../styles/style.css'
import profilePic from "../images/profile-pic.jpeg"

export default function AboutMe() {
  return (
    <div className="about-background">
      <div className="about-box">
        <div>
          <h1>Hi! I'm Phoenix.</h1>
          <p className="about-typed">
          I graduated from Wilfrid Laurier University in 2019 with an Honours Bachelors of Business Administration, specializing in Finance. I've had a few roles since graduating, but I'm currently working as a Financial Analyst at Ubisoft Toronto. Up until a few months ago, I was also working towards my CPA (as you can see, I've made quite the pivot from accounting). I wanted to explore a career that would give me the freedom to build things how I'd like. I've always been a logical person, and coding was something I had an interest in since university.
          </p>
        </div>
        <img id="profile-pic" src={profilePic} alt="Profile of me holding a coffee"></img>
      </div>
    </div>
  );
}
