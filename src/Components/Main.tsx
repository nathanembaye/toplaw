import React, { useEffect } from 'react';
import '../Styles/Main.css';
import App from './App.tsx';
import AppTest from './AppTest.tsx';
import About from './About.tsx'
import Tobias from './Tobias.tsx';
import Footer from './Footer.tsx';
import Directory from './Directory.tsx';
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Main() {
  return (
    <div id="main" className="mainContainer">
      <HashRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/progress" element={<AppTest />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/tobias" element={<><Tobias /><Directory /><Footer /></>}/>
            </Routes>
      </HashRouter>
    </div>
  );
}

export default Main;
