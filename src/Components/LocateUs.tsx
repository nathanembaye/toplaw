import React from 'react';
import '../Styles/LocateUs.css';

function LocateUs() {


  return (
    <div id="locateUs" className="locateUsContainer">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.4793571623713!2d-79.39316282307725!3d43.65899947110185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34c81bd294ab%3A0xa28153c5a11a29f4!2s1100%20University%20Ave%2C%20Toronto%2C%20ON%20M5J%202H7!5e0!3m2!1sen!2sca!4v1742871802909!5m2!1sen!2sca"
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

