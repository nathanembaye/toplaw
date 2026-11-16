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
            <svg className="footerCube" viewBox="0 0 131 111" role="img" aria-label="Geometric cube outline">
              <path d="M71.4622 55.5L34.063 110M71.4622 55.5L34.063 1M71.4622 55.5L130 55.5M34.063 110L1 55.5L34.063 1M34.063 110L91.5168 108.365L130 55.5M34.063 1L92.0588 1L130 55.5" />
            </svg>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2025 TOP LAW CRIMINAL DEFENCE. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
  );
}

export default Footer;
