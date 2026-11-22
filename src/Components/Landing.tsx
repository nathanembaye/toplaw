import React from 'react';
import '../Styles/Landing.css';
import logo from '../Assets/logo.svg';

function Landing() {
  return (
    <section className="homeContainer" id="landing">
      <nav className="landingMenu" aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#cases">Cases</a>
        <a href="#contact">Contact</a>
      </nav>
      <svg className="homeBackground" viewBox="0 0 300 200" preserveAspectRatio="none" aria-hidden="true">
        <path
          className="homeBackgroundPath"
          pathLength="1"
          d="M-10 167 C78 165 112 132 186 136 S268 147 310 129"
          fill="none"
          stroke="#c5d0c6"
          strokeWidth="0.22"
          strokeOpacity="0.5"
          strokeLinecap="round"
        />
      </svg>
      <img className="homeLogo" src={logo} alt="Top Law" />
    </section>
  );
}

export default Landing;
