import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import '../Styles/Main.css';
import logo from '../Assets/logo.svg';
import desktopNavLogo from '../Assets/logo-nav.svg';
import App from './App.tsx';
import About from './About.tsx'
import Profile from './Profile/Profile.tsx';
import Footer from './Footer.tsx';
import Directory from './Profile/Directory.tsx';
import ContactCTA from './Services/ContactCTA.tsx';
import ContactPage from './Contact/Contact.tsx';
import CaseLibrary from './CaseLibrary/CaseLibrary.tsx';
import BailHearings from './Services/BailHearings.tsx';
import CriminalAppeals from './Services/CriminalAppeals.tsx';
import CriminalTrials from './Services/CriminalTrials.tsx';
import ViolentOffences from './Services/ViolentOffences.tsx';
import SexualOffences from './Services/SexualOffences.tsx';
import DrugOffences from './Services/DrugOffences.tsx';
import { HashRouter, Routes, Route, Navigate, useLocation, Link, useNavigate } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const mainPageSections = [
  ['landing', 'Home'],
  ['about', 'Firm'],
  ['services', 'Services'],
  ['cases', 'Cases'],
  ['contact', 'Contact'],
  ['media', 'Press'],
];

const desktopMenuSections = [
  ['landing', 'Home'],
  ['about', 'Firm'],
  ['cases', 'Cases'],
  ['services', 'Services'],
  ['contact', 'Contact'],
  ['media', 'Press'],
];

const homeSectionOrder = ['landing', 'about', 'cases', 'services', 'contact', 'media'];

const practiceAreaPaths = [
  '/services/bail-hearings',
  '/services/criminal-appeals',
  '/services/criminal-trials',
  '/services/violent-offences',
  '/services/sexual-offences',
  '/services/drug-offences',
];

const pageTitles: Record<string, string> = {
  '/case-library': 'Case Library | TOP Law Criminal Defence',
  '/services/bail-hearings': 'Bail Hearing Lawyer in Toronto, Ontario | TOP Law',
  '/services/criminal-appeals': 'Criminal Appeal Lawyer in Toronto, Ontario | TOP Law',
  '/services/criminal-trials': 'Criminal Trial Lawyer in Toronto, Ontario | TOP Law',
  '/services/violent-offences': 'Violent Crime Lawyer in Toronto, Ontario | TOP Law',
  '/services/sexual-offences': 'Sexual Offence Lawyer in Toronto, Ontario | TOP Law',
  '/services/drug-offences': 'Drug Crime Lawyer in Toronto, Ontario | TOP Law',
};

const pageDescriptions: Record<string, string> = {
  '/case-library': 'Explore the TOP Law criminal defence case library.',
  '/services/bail-hearings': 'Facing a bail hearing in Toronto, Ontario? TOP Law provides strategic criminal defence representation for bail proceedings and release conditions.',
  '/services/criminal-appeals': 'Appealing a criminal conviction or sentence in Toronto, Ontario? TOP Law provides strategic legal representation for criminal appeals and appellate proceedings.',
  '/services/criminal-trials': 'Facing criminal charges in Toronto, Ontario? TOP Law provides strategic trial representation, challenging evidence and protecting your rights in court.',
  '/services/violent-offences': 'Charged with assault or a violent offence in Toronto, Ontario? TOP Law provides strategic criminal defence representation for serious criminal allegations.',
  '/services/sexual-offences': 'Facing sexual assault or other sexual offence charges in Toronto, Ontario? TOP Law provides confidential, strategic criminal defence representation.',
  '/services/drug-offences': 'Facing drug possession, trafficking or production charges in Toronto, Ontario? TOP Law provides strategic criminal defence representation to protect your rights.',
};

function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = pageTitles[pathname] ?? 'TOP Law Criminal Defence';

    const descriptions = document.head.querySelectorAll<HTMLMetaElement>('meta[name="description"]');
    let descriptionTag = descriptions[0];

    if (!descriptionTag) {
      descriptionTag = document.createElement('meta');
      descriptionTag.name = 'description';
      document.head.appendChild(descriptionTag);
    }

    descriptions.forEach((tag, index) => {
      if (index > 0) tag.remove();
    });

    descriptionTag.content = pageDescriptions[pathname] ?? 'TOP Law | A Criminal Defence firm that will fight for you.';
  }, [pathname]);

  return null;
}

function SectionNavigation() {
  const location = useLocation();
  const navigate = useNavigate();
  const isMainPage = location.pathname === '/';
  const isTobiasPage = location.pathname === '/tobias';
  const isContactPage = location.pathname === '/contact';
  const isCaseLibraryPage = location.pathname === '/case-library';
  const isPracticeAreaPage = practiceAreaPaths.includes(location.pathname);
  const [showSectionMenu, setShowSectionMenu] = useState(false);
  const [hasShownSectionMenu, setHasShownSectionMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('landing');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileMenuClosing, setIsMobileMenuClosing] = useState(false);
  const [isDesktopMenu, setIsDesktopMenu] = useState(window.innerWidth >= 768);
  const [clickedSection, setClickedSection] = useState<string | null>(null);
  const menuRef = useRef<HTMLElement | null>(null);
  const underlineRef = useRef<HTMLSpanElement | null>(null);
  const menuLabelRefs = useRef<Array<HTMLSpanElement | null>>([]);

  const activeMenuSection = clickedSection ?? (isMainPage
    ? activeSection
    : isTobiasPage
      ? 'about'
      : isContactPage
        ? 'contact'
        : isPracticeAreaPage
          ? 'services'
          : null);
  const underlineSection = activeMenuSection;
  const displayedMenuSections = isDesktopMenu ? desktopMenuSections : mainPageSections;

  useEffect(() => {
    const updateDesktopMenu = () => setIsDesktopMenu(window.innerWidth >= 768);
    window.addEventListener('resize', updateDesktopMenu);
    return () => window.removeEventListener('resize', updateDesktopMenu);
  }, []);

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
    if (isTobiasPage || isContactPage || isCaseLibraryPage || isPracticeAreaPage) {
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
    const homeSection = document.getElementById('landing');
    if (!homeSection) return;

    const observer = new IntersectionObserver(([entry]) => {
      const shouldShowMenu = entry.intersectionRatio <= 0.5;
      if (shouldShowMenu) setHasShownSectionMenu(true);
      setShowSectionMenu(shouldShowMenu);
    }, { threshold: [0, 0.5, 1] });

    observer.observe(homeSection);
    return () => observer.disconnect();
  }, [isMainPage, isTobiasPage, isContactPage, isCaseLibraryPage, isPracticeAreaPage]);

  useEffect(() => {
    if (!isMainPage) return;
    const updateActiveSection = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      let currentSection = activeSection;
      let greatestVisibleHeight = 0;
      let closestToCenter = Number.POSITIVE_INFINITY;

      homeSectionOrder.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const visibleHeight = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
        const centerDistance = rect.top <= viewportCenter && rect.bottom >= viewportCenter
          ? 0
          : Math.min(Math.abs(rect.top - viewportCenter), Math.abs(rect.bottom - viewportCenter));

        if (visibleHeight > greatestVisibleHeight || (visibleHeight > 0 && visibleHeight === greatestVisibleHeight && centerDistance < closestToCenter)) {
          currentSection = id;
          greatestVisibleHeight = visibleHeight;
          closestToCenter = centerDistance;
        }
      });
      if (greatestVisibleHeight > 0) {
        setActiveSection(currentSection);
        if (clickedSection === currentSection) setClickedSection(null);
      }
    };

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    updateActiveSection();
    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, [isMainPage, activeSection, clickedSection]);

  useLayoutEffect(() => {
    const menu = menuRef.current;
    const underline = underlineRef.current;
    if (!menu || !underline) return;
    let readyFrame: number | null = null;

    const syncUnderline = () => {
      const sectionIndex = displayedMenuSections.findIndex(([section]) => section === underlineSection);
      const label = sectionIndex >= 0 ? menuLabelRefs.current[sectionIndex] : null;

      if (!label || isMobileMenuOpen || window.innerWidth < 768) {
        underline.style.width = '0px';
        underline.classList.remove('homeSectionMenuUnderline--visible');
        return;
      }

      const menuRect = menu.getBoundingClientRect();
      const labelRect = label.getBoundingClientRect();
      underline.style.setProperty('--underline-x', `${labelRect.left - menuRect.left}px`);
      underline.style.setProperty('--underline-y', `${labelRect.bottom - menuRect.top + 6}px`);
      underline.style.width = `${labelRect.width}px`;
      underline.classList.add('homeSectionMenuUnderline--visible');
      if (!underline.classList.contains('homeSectionMenuUnderline--ready') && readyFrame === null) {
        readyFrame = window.requestAnimationFrame(() => {
          underline.classList.add('homeSectionMenuUnderline--ready');
          readyFrame = null;
        });
      }
    };

    syncUnderline();
    window.addEventListener('resize', syncUnderline);
    const resizeObserver = typeof ResizeObserver === 'undefined'
      ? null
      : new ResizeObserver(syncUnderline);
    resizeObserver?.observe(menu);
    menuLabelRefs.current.forEach((label) => {
      if (label) resizeObserver?.observe(label);
    });
    document.fonts?.ready.then(syncUnderline);

    return () => {
      window.removeEventListener('resize', syncUnderline);
      resizeObserver?.disconnect();
      if (readyFrame !== null) window.cancelAnimationFrame(readyFrame);
    };
  }, [underlineSection, isMobileMenuOpen, isDesktopMenu]);

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
    setClickedSection(sectionId);
    if (isMainPage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
    closeMobileMenu();
  };

  const isVisible = isTobiasPage || isContactPage || isCaseLibraryPage || isPracticeAreaPage || showSectionMenu;
  const navClassName = `homeSectionMenu${isVisible ? ' homeSectionMenu--visible' : hasShownSectionMenu ? ' homeSectionMenu--hidden' : ''}${isMobileMenuOpen ? ' homeSectionMenu--mobile-open' : ''}${isMobileMenuClosing ? ' homeSectionMenu--mobile-closing' : ''}`;

  return (
    <nav
      ref={menuRef}
      className={navClassName}
      aria-label="Page sections"
      aria-hidden={!isVisible}
      inert={!isVisible}
    >
      <div className="homeSectionMenuHeader">
        <Link
          className="homeSectionMenuBrand"
          to="/"
          state={!isMainPage ? { scrollTo: 'landing' } : undefined}
          aria-label="TOP LAW home"
          onClick={isMainPage ? (event) => {
            event.preventDefault();
            document.getElementById('landing')?.scrollIntoView({ behavior: 'smooth' });
          } : undefined}
        >
          <picture>
            <source media="(min-width: 768px)" srcSet={desktopNavLogo} />
            <img className="homeSectionMenuBrandLogo" src={logo} alt="Top Law" />
          </picture>
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
      {displayedMenuSections.map(([id, label], index) => (
        <button
          key={id}
          type="button"
          ref={(element) => { menuLabelRefs.current[index] = element?.querySelector<HTMLSpanElement>('.homeSectionMenuLabel') ?? null; }}
          className={activeMenuSection === id ? 'homeSectionMenuActive' : ''}
          aria-current={activeMenuSection === id ? 'location' : undefined}
          onClick={() => goToSection(id)}
        >
          <span className="homeSectionMenuNumber">{String(isMobileMenuOpen ? index : index + 1).padStart(2, '0')}</span>
          <span className="homeSectionMenuLabel">{label}</span>
        </button>
      ))}
      <span ref={underlineRef} className="homeSectionMenuUnderline" aria-hidden="true" />
      <div className="homeSectionMenuFooter">TOP Law · Criminal Defence</div>
    </nav>
  );
}

function TobiasPage() {
  return <div className="tobiasPageContent"><Profile /><Directory /><ContactCTA /><Footer /></div>;
}

function Main() {
  return (
    <div id="main" className="mainContainer">
      <HashRouter>
        <ScrollToTop />
        <RouteMetadata />
        <SectionNavigation />
        <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/tobias" element={<TobiasPage />}/>
                <Route path="/contact" element={<ContactPage />}/>
                <Route path="/case-library" element={<CaseLibrary />}/>
                <Route path="/case-index" element={<Navigate to="/case-library" replace />}/>
                <Route path="/services/bail-hearings" element={<BailHearings />}/>
                <Route path="/services/criminal-appeals" element={<CriminalAppeals />}/>
                <Route path="/services/criminal-trials" element={<CriminalTrials />}/>
                <Route path="/services/violent-offences" element={<ViolentOffences />}/>
                <Route path="/services/sexual-offences" element={<SexualOffences />}/>
                <Route path="/services/drug-offences" element={<DrugOffences />}/>
                <Route path="/bailhearings" element={<Navigate to="/services/bail-hearings" replace />}/>
                <Route path="/criminalappeals" element={<Navigate to="/services/criminal-appeals" replace />}/>
                <Route path="/criminaltrials" element={<Navigate to="/services/criminal-trials" replace />}/>
                <Route path="/violentoffences" element={<Navigate to="/services/violent-offences" replace />}/>
                <Route path="/sexualoffences" element={<Navigate to="/services/sexual-offences" replace />}/>
                <Route path="/drugoffences" element={<Navigate to="/services/drug-offences" replace />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default Main;
