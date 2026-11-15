import React, { useState, useEffect } from 'react';
import '../Styles/App.css';
import LandingPage from './LandingPage.tsx';
import Services from './Services.tsx';
import Values from './Values.tsx';
import Team from './Team.tsx';
import Motto from './Motto.tsx';
import Home from './Home.tsx';
import Media from './Media.tsx';
import About from './About.tsx';
import Tobias from './Tobias.tsx';
import Cases from './Cases.tsx';
import Contact from './Contact.tsx';
import Footer from './Footer.tsx'
import LocateUs from './LocateUs.tsx';

const pageSections = [
  ['home', 'Home'],
  ['motto', 'Values'],
  ['services', 'Services'],
  ['cases', 'Cases'],
  ['about', 'About'],
  ['contact', 'Contact'],
  ['media', 'Media'],
];

function App() {
  const [showSectionMenu, setShowSectionMenu] = useState(false);
  const [hasShownSectionMenu, setHasShownSectionMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {

      const urlParams = new URLSearchParams(window.location.search);
      const section = urlParams.get('section');
      
      if (section !== null && ["landing", "team", "services", "contact"].includes(section)) {
        document.getElementById(section)?.scrollIntoView({behavior: "smooth"})
        window.history.pushState({}, document.title, "/" + '');
      }

    }, []);

  useEffect(() => {
    const homeSection = document.getElementById('home');
    if (!homeSection) return;

    const observer = new IntersectionObserver(([entry]) => {
      const shouldShowMenu = entry.intersectionRatio <= 0.5;
      if (shouldShowMenu) {
        setHasShownSectionMenu(true);
      }
      setShowSectionMenu(shouldShowMenu);
    }, { threshold: [0, 0.5, 1] });

    observer.observe(homeSection);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.35;
      let currentSection = pageSections[0][0];

      pageSections.forEach(([id]) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= marker) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    updateActiveSection();

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`homeSectionMenu${showSectionMenu ? ' homeSectionMenu--visible' : hasShownSectionMenu ? ' homeSectionMenu--hidden' : ''}`}
        aria-label="Page sections"
        aria-hidden={!showSectionMenu}
        inert={!showSectionMenu}
      >
          {pageSections.map(([id, label]) => (
            <button
              key={id}
              type="button"
              className={activeSection === id ? 'homeSectionMenuActive' : ''}
              aria-current={activeSection === id ? 'location' : undefined}
              onClick={() => scrollToSection(id)}
            >
              {label}
            </button>
          ))}
      </nav>
      <Home/>
      <Motto/>
      <Services/>
      <Cases/>
      <About/>
      <Contact />
      <Media />
      <Footer />
    </>
  );
 
}

export default App;
