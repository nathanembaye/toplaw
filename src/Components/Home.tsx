import React from 'react';
import '../Styles/Home.css';
import logo from '../Assets/logo.svg';

function Home() {
  return (
    <section className="homeContainer" id="home">
      <img className="homeLogo" src={logo} alt="Top Law" />
    </section>
  );
}

export default Home;
