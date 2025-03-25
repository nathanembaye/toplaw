import React, { useState, useEffect } from 'react';
import { IoIosClose } from "react-icons/io";
import '../Styles/App.css';
import LandingPage from './LandingPage.tsx';
import Services from './Services.tsx';
import Team from './Team.tsx';
import Contact from './Contact.tsx';
import Footer from './Footer.tsx'
import LocateUs from './LocateUs.tsx';

function AppTest() {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [clickedNavItem, setClickedNavitem] = useState<string>("");


  function navClicked(itemClicked: string) {
    setClickedNavitem(itemClicked);
    setIsMenuOpen(false);
  }

  useEffect(() => {

      const urlParams = new URLSearchParams(window.location.search);
      const section = urlParams.get('section');
      
      if (section !== null && ["landing", "team", "services", "contact"].includes(section)) {
        document.getElementById(section)?.scrollIntoView({behavior: "smooth"})
        window.history.pushState({}, document.title, "/" + '');
      }

    }, []);

  useEffect(() => {
      if (clickedNavItem !== ""){
        document.getElementById(clickedNavItem)?.scrollIntoView({behavior: "smooth"})
      }
      setClickedNavitem("");
  }, [isMenuOpen]);

  const Navigation = () => {
    return  <>
              <div className="NavigationTop">
                <div className="NavigationMenu">
                  <div className="NavigationIcon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <IoIosClose size={60} color="black"/>
                  </div>
                </div>
              </div>
              <div className="NavigationBottom">
                <div className="NavigationContainer">
                  <div className="NavigationItem">
                    <h1 className={clickedNavItem !== "landing" ? "NavigationItemText" : "NavigationItemTextClicked"} onClick={() => navClicked("home")}>HOME</h1>
                  </div>
                  <div className="NavigationItem">
                    <h1 className={clickedNavItem !== "services" ? "NavigationItemText" : "NavigationItemTextClicked"} onClick={() => navClicked("services")}>SERVICES</h1>
                  </div>
                  <div className="NavigationItem">
                    <h1 className={clickedNavItem !== "team" ? "NavigationItemText" : "NavigationItemTextClicked"} onClick={() => navClicked("team")}>TEAM</h1>
                  </div>
                  <div className="NavigationItem">
                    <h1 className={clickedNavItem !== "contact" ? "NavigationItemText" : "NavigationItemTextClicked"} onClick={() => navClicked("contact")}>CONTACT</h1>
                  </div>
                </div>
              </div>
            </>
  }

  return (
    <>
      <LandingPage />
      <Services/>
      <Contact />
      <LocateUs />
      <Footer />
    </>
  );
 
}

export default AppTest;
