import React from 'react';
import '../Styles/Footer.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Assets/logo.svg';

const footerLinks = [
  ['about', 'Firm'],
  ['services', 'Services'],
  ['cases', 'Results'],
  ['contact', 'Contact'],
];

const serviceLinks = [
  'Bail Hearings',
  'Criminal Appeals',
  'Criminal Trials',
  'Drug Offences',
  'Sexual Offences',
  'Violent Offences',
];

function Footer() {
  const location = useLocation();

  const scrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    event.preventDefault();
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="siteFooter">
      <div className="footerMain">
        <Link
          className="footerBrand"
          to="/"
          state={location.pathname === '/' ? undefined : { scrollTo: 'home' }}
          aria-label="TOP LAW home"
          onClick={location.pathname === '/' ? (event) => scrollToSection(event, 'home') : undefined}
        >
          <img className="footerBrandTitle" src={logo} alt="Top Law" />
        </Link>

        <div className="footerInformation">
          <nav className="footerNav" aria-label="Footer navigation">
            <h2 className="footerColumnHeading">Overview</h2>
            {footerLinks.map(([section, label]) => (
              <a key={section} href={`#${section}`} onClick={(event) => scrollToSection(event, section)}>{label}</a>
            ))}
          </nav>

          <nav className="footerServices" aria-label="Footer services">
            <h2 className="footerColumnHeading">Services</h2>
            {serviceLinks.map((service) => (
              <a key={service} href="#services" onClick={(event) => scrollToSection(event, 'services')}>{service}</a>
            ))}
          </nav>

          <div className="footerContact">
            <div className="footerContactItem">
              <h2 className="footerColumnHeading">Call</h2>
              <a href="tel:+16479159325">(647) 915-9325</a>
            </div>
            <div className="footerContactItem">
              <h2 className="footerColumnHeading">Email</h2>
              <a href="mailto:tobias@top-law.ca">tobias@top-law.ca</a>
            </div>
            <div className="footerContactItem">
              <h2 className="footerColumnHeading">Visit</h2>
              <a
                href="https://www.google.com/maps/search/?api=1&query=439+University+Ave+Suite+No.+1200%2C+Toronto%2C+ON+M5G+1Y8"
                target="_blank"
                rel="noreferrer"
              >
                439 University Ave Suite No. 1200, Toronto, ON M5G 1Y8
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <p>© {new Date().getFullYear()} TOP Law. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
