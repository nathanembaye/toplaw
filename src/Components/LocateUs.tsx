import React from 'react';
import '../Styles/LocateUs.css';

function LocateUs() {


  return (
    <div id="locateUs" className="locateUsContainer">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5774.143139779662!2d-79.38887564870403!3d43.646679278582475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b35be338d08bb%3A0x395ff5110aac66ea!2s55%20University%20Ave%20Suite%20No.%201100%2C%20Toronto%2C%20ON%20M5J%202H7!5e0!3m2!1sen!2sca!4v1742916900622!5m2!1sen!2sca"
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          className="googleMap"
      />
    </div>
  );
}

export default LocateUs;

