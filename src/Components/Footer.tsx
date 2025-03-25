import React, { useState } from 'react';
import '../Styles/Footer.css';
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IconContext } from "react-icons";

function Footer() {

  const [containerDesign, setContainerDesign] = useState(window.innerWidth <= 767 ? 'footerContainerColumn' : 'footerContainerRow');


  window.addEventListener('resize', function(){
    if (window.innerWidth <= 767 && containerDesign !== 'footerContainerColumn'){
      setContainerDesign('footerContainerColumn');
    }
    else if (window.innerWidth > 767 && containerDesign !== 'footerContainerRow'){
      setContainerDesign('footerContainerRow');
    }
});

  return (
      <footer>
        <div class="footer-container">
        
          <div class="footer-section logo">
            <img src={require('../Assets/judge.png')} alt="Company Logo" class="logo-img"/>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 TopLaw. All rights reserved.</p>
        </div>
      </footer>
  );
}

export default Footer;
