import React from 'react';
import '../Styles/LocateUs.css';

function LocateUs() {


  return (
    <div id="locateUs" className="locateUsContainer">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.698540880735!2d-79.39026782382315!3d43.654439971102015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34c93ba74d67%3A0x8d95fc81dc47fd80!2s439%20University%20Ave%20Ste%201200%2C%20Toronto%2C%20ON%20M5G%201Y8!5e0!3m2!1sen!2sca!4v1792985622820!5m2!1sen!2sca"
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

