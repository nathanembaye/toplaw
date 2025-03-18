import React, { useState } from 'react';
import '../Styles/Contact.css';

function Contact() {

  const [contentDesign, setContentDesign] = useState(window.innerWidth <= 767 ? 'contactColumnContent' : 'contactRowContent');

         
  window.addEventListener('resize', function(){

    // general card design
    if (window.innerWidth <= 767 && contentDesign !== 'contactColumnContent'){
      setContentDesign('contactColumnContent');
    }
    else if (window.innerWidth > 767 && contentDesign !== 'contactRowContent'){
      setContentDesign('contactRowContent');
    }

  });

  

  return (
    <div id="contact" className="contactContainer">

          <div className="contactContentContainer">
            

            <div className="contactTextContainer">
              <p className="contactTextTitle">Contact Us</p>
              <p className="contactTextSummary">Any questions about our services or availability? We’re here to help. Chat with our friendly team 24/7 and get the answers you’re looking for.</p>
            </div>

            <div className={contentDesign}>

            <div className="mapContainer">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5610.854600776958!2d-75.6052527!3d45.3199932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce098e73832777%3A0x96b1c3ec7ec30452!2s624%20White%20Alder%20Ave%2C%20Gloucester%2C%20ON%20K1T%200E5!5e0!3m2!1sen!2sca!4v1742157057305!5m2!1sen!2sca"
                    frameborder="0"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                    className="googleMap"
                />
            </div>
            
              <div className="getInTouchContainer">
                
                <div className="getInTouchHeader">
                  <p className="getInTouchTitle">Get In Touch</p>
                  <p className="getInTouchSummary">Hear what our experts have to say.</p>
                </div>
     

                <div className="nameRow">
                  <div className="nameEntry">
                    <p className="nameText">First Name</p>
                    <input className="nameInput" placeholder="John"/>
                  </div>
                  <div className="nameEntry">
                    <p className="nameText">Last Name</p>
                    <input className="nameInput" placeholder="Doe"/>
                  </div>
                </div>


                <div className="emailEntry">
                  <p className="emailText">Email</p>
                  <input className="emailInput" placeholder="johndoe@gmail.com"/>
                </div>

                <div className="phoneEntry">
                  <p className="phoneText">Phone Number</p>
                  <input type="tel" className="phoneInput" placeholder="613-123-4567"/>
                </div>


                <div className="messageEntry">
                  <p className="messageText">Message</p>
                  <textarea className="messageInput" placeholder="Hello, my name is John and I'm looking for representation..."/>
                </div>

                <button className="getInTouchButton">
                  Send Message
                </button>
              </div>

         </div>

          </div>


    </div>
  );
}

export default Contact;
