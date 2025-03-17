import React, { useState } from 'react';
import '../Styles/Footer.css';
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer() {

  const [containerDesign, setContainerDesign] = useState(window.innerWidth <= 767 ? 'footerContainerColumn' : 'footerContainerRow');
  const [splits, setSplits] = useState(window.innerWidth <= 767 ? true : false);


  window.addEventListener('resize', function(){
    if (window.innerWidth <= 767 && containerDesign !== 'footerContainerColumn'){
      setContainerDesign('footerContainerColumn');
      setSplits(true);
    }
    else if (window.innerWidth > 767 && containerDesign !== 'footerContainerRow'){
      setContainerDesign('footerContainerRow');
      setSplits(false);
    }
});

  return (
    <div id="footer" className={containerDesign}>

        <div className={containerDesign === "footerContainerColumn" ? "footerLogoContainerMobile" : "footerLogoContainerDesktop"}>
          <div className="footerLogo">
            <p className="footerLogoText">TopLaw</p>
          </div>
        </div>



      <div className="footerTextContainer">
          <p className="footerMiddleText">26 Soho Street, Suite 400, Toronto, ON</p>
          <div className="footerBullets">
            <p className="footerBulletText">OFFICE:</p>
            <p className="footerBulletTextEntry">+1 (416) 629-4800</p>
          </div>
          <div className="footerBullets">
            <p className="footerBulletText">COLLECT:</p>
            <p className="footerBulletTextEntry">+1 (833) 629-4800</p>
          </div>
          <p className="footerMiddleText">Privacy Policy</p>
          <div className="footerBullets">
            <p className="footerBulletText">Website by</p>
            <p className="footerBulletTextEntry">M81 Creative</p>
          </div>
      </div>


        <div className={containerDesign === "footerContainerColumn" ? "footerLinksListMobile" : "footerLinksListDesktop"}>
          <p className="footerLinks" onClick={() => document.getElementById('landing')?.scrollIntoView({behavior: "smooth"})}>Home</p>
          <p className="footerLinks" onClick={() => document.getElementById('services')?.scrollIntoView({behavior: "smooth"})}>Services</p>
          <p className="footerLinks" onClick={() => document.getElementById('team')?.scrollIntoView({behavior: "smooth"})}>Team</p>
          <p className="footerLinks" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: "smooth"})}>Contact</p>
          <div className="footerSocialMediaList">
            <IconContext.Provider value={{ size: 20, color: "black", className: "footerIcon" }}>
              <FaTwitter/>
              <FaInstagram />
              <FaLinkedinIn/>
            </IconContext.Provider>
          </div>
        </div>


    </div>
  );
}

export default Footer;
