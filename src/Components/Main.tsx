import React from 'react';
import '../Styles/Main.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import App from './App.tsx';
import About from './About.tsx';

function Main() {
  return (
    <div id="main" className="mainContainer">
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<App />}/>
                    <Route path="/about" element={<About />}/>
                </Routes>
            </HashRouter>
    </div>
  );
}

export default Main;
