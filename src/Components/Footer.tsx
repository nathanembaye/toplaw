import React from 'react';
import '../Styles/Footer.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../Assets/logo.svg';

const footerLinks = [
  ['/tobias', 'Firm'],
  ['/case-library', 'Cases'],
  ['/', 'Services'],
  ['/contact', 'Contact'],
];

const serviceLinks = [
  ['Bail Hearings', '/services/bail-hearings'],
  ['Criminal Appeals', '/services/criminal-appeals'],
  ['Criminal Trials', '/services/criminal-trials'],
  ['Drug Offences', '/services/drug-offences'],
  ['Sexual Offences', '/services/sexual-offences'],
  ['Violent Offences', '/services/violent-offences'],
];

function Footer() {
  const location = useLocation();

  return (
    <footer className="siteFooter">
      <div className="footerMain">
        <Link
          className="footerBrand"
          to="/"
          state={location.pathname === '/' ? undefined : { scrollTo: 'landing' }}
          aria-label="TOP LAW home"
          onClick={location.pathname === '/' ? (event) => scrollToSection(event, 'home') : undefined}
        >
          <img className="footerBrandTitle" src={logo} alt="Top Law" />
        </Link>

        <div className="footerInformation">
          <nav className="footerNav" aria-label="Footer navigation">
            <h2 className="footerColumnHeading">Overview</h2>
            {footerLinks.map(([path, label]) => (
              <Link
                key={path}
                to={path}
                state={path === '/' ? { scrollTo: 'services' } : undefined}
                onClick={path === '/' && location.pathname === '/' ? (event) => {
                  event.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                } : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>

          <nav className="footerServices" aria-label="Footer services">
            <h2 className="footerColumnHeading">Services</h2>
            {serviceLinks.map(([service, path]) => (
              <Link key={path} to={path}>{service}</Link>
            ))}
          </nav>

          <div className="footerContact">
            <div className="footerContactItem">
              <h2 className="footerColumnHeading">Phone</h2>
              <a href="tel:6479159325">647-915-9325</a>
            </div>
            <div className="footerContactItem">
              <h2 className="footerColumnHeading">Email</h2>
              <a href="mailto:info@top-law.ca">info@top-law.ca</a>
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
