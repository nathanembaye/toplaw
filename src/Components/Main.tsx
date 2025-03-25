import React from 'react';
import '../Styles/Main.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import App from './App.tsx';
import About from './About.tsx';

function Main() {
  return (
    <div id="main" className="mainContainer">
            <App/>
    </div>
  );
}

export default Main;
