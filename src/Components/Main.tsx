import React from 'react';
import '../Styles/Main.css';
import App from './App.tsx';
import AppTest from './AppTest.tsx';
import { HashRouter, Routes, Route } from "react-router-dom";

function Main() {
  return (
    <div id="main" className="mainContainer">
      <HashRouter>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/progress" element={<AppTest />}/>
            </Routes>
      </HashRouter>
    </div>
  );
}

export default Main;
