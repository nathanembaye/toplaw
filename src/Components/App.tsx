import React, { useEffect } from 'react';
import '../Styles/App.css';
import Services from './Services.tsx';
import Landing from './Landing.tsx';
import Media from './Media.tsx';
import About from './About.tsx';
import Cases from './Cases.tsx';
import Form from './Form.tsx';
import Footer from './Footer.tsx'
import { useLocation } from 'react-router-dom';

const pageSections = [
  ['landing', 'Landing'],
  ['about', 'About'],
  ['cases', 'Cases'],
  ['services', 'Services'],
  ['contact', 'Contact'],
  ['media', 'Press'],
];

function App() {
  const location = useLocation();

  useEffect(() => {

      const urlParams = new URLSearchParams(window.location.search);
      const section = urlParams.get('section');
      
      if (section !== null && ["landing", "team", "services", "contact"].includes(section)) {
        document.getElementById(section)?.scrollIntoView({behavior: "smooth"})
        window.history.pushState({}, document.title, "/" + '');
      }

    }, []);

  useEffect(() => {
    const requestedSection = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!requestedSection || !pageSections.some(([id]) => id === requestedSection)) return;

    let firstFrame = 0;
    const secondFrame = window.requestAnimationFrame(() => {
      firstFrame = window.requestAnimationFrame(() => {
        document.getElementById(requestedSection)?.scrollIntoView({ behavior: 'smooth' });
      });
    });

    return () => {
      window.cancelAnimationFrame(secondFrame);
      if (firstFrame) window.cancelAnimationFrame(firstFrame);
    };
  }, [location.key, location.state]);

  return (
    <>
      <Landing/>
      <About/>
      <Cases/>
      <Services/>
      <Form />
      <Media />
      <Footer />
    </>
  );
 
}

export default App;
