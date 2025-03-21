import React from 'react';
import '../Styles/LocateUs.css';

function LocateUs() {


  return (
    <div id="locateUs" className="locateUsContainer">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5610.854600776958!2d-75.6052527!3d45.3199932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce098e73832777%3A0x96b1c3ec7ec30452!2s624%20White%20Alder%20Ave%2C%20Gloucester%2C%20ON%20K1T%200E5!5e0!3m2!1sen!2sca!4v1742157057305!5m2!1sen!2sca"
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
