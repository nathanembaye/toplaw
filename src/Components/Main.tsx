import React, { useEffect, useState } from 'react';
import '../Styles/Main.css';
import App from './App.tsx';
import AppTest from './AppTest.tsx';
import About from './About.tsx'
import Tobias from './Tobias.tsx';
import Footer from './Footer.tsx';
import Directory from './Directory.tsx';
import { HashRouter, Routes, Route, useLocation, Link, useNavigate } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const mainPageSections = [
  ['home', 'Home'],
  ['about', 'About'],
  ['cases', 'Cases'],
  ['services', 'Services'],
  ['contact', 'Contact'],
  ['media', 'Press'],
];

function SectionNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const isMainPage = location.pathname === '/';
  const isTobiasPage = location.pathname === '/tobias';
  const [showSectionMenu, setShowSectionMenu] = useState(false);
  const [hasShownSectionMenu, setHasShownSectionMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuClosing, setIsMobileMenuClosing] = useState(false);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const scrollY = window.scrollY;
    const { overflow, position, top, width } = document.body.style;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.position = position;
      document.body.style.top = top;
      document.body.style.width = width;
      window.scrollTo(0, scrollY);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isTobiasPage) {
      setShowSectionMenu(true);
      setHasShownSectionMenu(true);
      return;
    }
    if (!isMainPage) {
      setShowSectionMenu(false);
      return;
    }

    setShowSectionMenu(false);
    setHasShownSectionMenu(false);
    const homeSection = document.getElementById('home');
    if (!homeSection) return;

    const observer = new IntersectionObserver(([entry]) => {
      const shouldShowMenu = entry.intersectionRatio <= 0.5;
      if (shouldShowMenu) setHasShownSectionMenu(true);
      setShowSectionMenu(shouldShowMenu);
    }, { threshold: [0, 0.5, 1] });

    observer.observe(homeSection);
    return () => observer.disconnect();
  }, [isMainPage, isTobiasPage]);

  useEffect(() => {
    if (!isMainPage) return;
    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.35;
      let currentSection = mainPageSections[0][0];
      mainPageSections.forEach(([id]) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= marker) currentSection = id;
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
  }, [isMainPage]);

  const closeMobileMenu = () => {
    if (!isMobileMenuOpen || isMobileMenuClosing) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsMobileMenuOpen(false);
      return;
    }
    setIsMobileMenuClosing(true);
    window.setTimeout(() => {
      setIsMobileMenuOpen(false);
      setIsMobileMenuClosing(false);
    }, 900);
  };

  const goToSection = (sectionId: string) => {
    if (isMainPage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
    closeMobileMenu();
  };

  const isVisible = isTobiasPage || showSectionMenu;
  const navClassName = `homeSectionMenu${isVisible ? ' homeSectionMenu--visible' : hasShownSectionMenu ? ' homeSectionMenu--hidden' : ''}${isMobileMenuOpen ? ' homeSectionMenu--mobile-open' : ''}${isMobileMenuClosing ? ' homeSectionMenu--mobile-closing' : ''}`;

  return (
    <nav
      className={navClassName}
      aria-label="Page sections"
      aria-hidden={!isVisible}
      inert={!isVisible}
    >
      <div className="homeSectionMenuHeader">
        <Link
          className="homeSectionMenuBrand"
          to="/"
          state={!isMainPage ? { scrollTo: 'home' } : undefined}
          aria-label="TOP LAW home"
          onClick={isMainPage ? (event) => {
            event.preventDefault();
            document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
          } : undefined}
        >
          <span className="homeSectionMenuBrandTitle">TOP LAW</span>
          <span className="homeSectionMenuBrandSubtitle">CRIMINAL DEFENCE</span>
        </Link>
        <button
          type="button"
          className="homeSectionMenuToggle"
          aria-label={isMobileMenuOpen ? 'Close section menu' : 'Open section menu'}
          aria-expanded={isMobileMenuOpen && !isMobileMenuClosing}
          onClick={() => isMobileMenuOpen ? closeMobileMenu() : setIsMobileMenuOpen(true)}
        >
          <svg className={isMobileMenuOpen ? 'homeMenuIcon homeMenuIconOpen' : 'homeMenuIcon'} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <line className="homeMenuIconTop" x1="3" y1="6" x2="21" y2="6" />
            <line className="homeMenuIconMiddle" x1="3" y1="12" x2="21" y2="12" />
            <line className="homeMenuIconBottom" x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
      {mainPageSections.map(([id, label], index) => (
        <button
          key={id}
          type="button"
          className={activeSection === id ? 'homeSectionMenuActive' : ''}
          aria-current={activeSection === id ? 'location' : undefined}
          onClick={() => goToSection(id)}
        >
          <span className="homeSectionMenuNumber">{String(isMobileMenuOpen ? index : index + 1).padStart(2, '0')}</span>
          <span className="homeSectionMenuLabel">{label}</span>
        </button>
      ))}
      <div className="homeSectionMenuFooter">TOP Law · Criminal Defence</div>
    </nav>
  );
}

function TobiasPage() {
  return <div className="tobiasPageContent"><Tobias /><Directory /><Footer /></div>;
}

function Main() {
  return (
    <div id="main" className="mainContainer">
      <HashRouter>
        <ScrollToTop />
        <SectionNavigation />
        <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/progress" element={<AppTest />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/tobias" element={<TobiasPage />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default Main;
