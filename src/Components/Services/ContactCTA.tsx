import React from 'react';
import { Link } from 'react-router-dom';
import './ContactCTA.css';

function ContactCTA() {
  return (
    <section className="contactCTA" aria-labelledby="contactCTAHeading">
      <div className="contactCTAContent">
        <p className="contactCTALabel">NEXT STEPS</p>
        <h2 className="contactCTAHeading" id="contactCTAHeading">Discuss your case.</h2>
        <div className="contactCTARow">
          <p className="contactCTADescription">Legal representation begins with a conversation.</p>
          <Link className="contactCTALink" to="/contact">
            Contact the firm
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
