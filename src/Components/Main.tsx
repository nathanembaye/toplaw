import React from 'react';
import '../Styles/Main.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.tsx';
import About from './About.tsx';

function Main() {
  return (
    <div id="main" className="mainContainer">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}/>
                    <Route path="/about" element={<About />}/>
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default Main;
