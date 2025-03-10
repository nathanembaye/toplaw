import React from 'react';
import '../Styles/Main.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.tsx';
import About from './About.tsx';
// rm -rf node_modules/.cache/gh-pages && git config --global http.postBuffer 524288000 && npm run deploy
function Main() {
  return (
    <div id="main" className="mainContainer">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<App />}/>
                    <Route path="/bio" element={<About />}/>
                </Routes>
            </BrowserRouter>
    </div>
  );
}

export default Main;
