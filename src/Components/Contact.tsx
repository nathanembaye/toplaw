import React, { useState } from 'react';
import '../Styles/Contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { PiBuildingOffice } from "react-icons/pi";



function Contact() {

  const [contentDesign, setContentDesign] = useState(window.innerWidth <= 900 ? 'contactColumnContent' : 'contactRowContent');

         
  window.addEventListener('resize', function(){

    // general card design
    if (window.innerWidth <= 900 && contentDesign !== 'contactColumnContent'){
      setContentDesign('contactColumnContent');
    }
    else if (window.innerWidth > 900 && contentDesign !== 'contactRowContent'){
      setContentDesign('contactRowContent');
    }

  });

  

  return (
    <div id="contact" className="contactContainer">

          <div className="contactContentContainer">
            

            <div className={contentDesign}>

              <div className="testTextContainer">

                <p className="testTextTitle">Contact Us</p>
                <p className="testTextSummary">Reach out to us with any questions or inquiries. We're here to help!</p>

                <div className="test">
                  <div className="testTextRow">
                    <MdOutlineEmail size={25}/>
                    <a className="testTextRowTitle" href="mailto:tobias@top-law.ca">tobias@top-law.ca</a>
                  </div>
                </div>
                <div className="test">
                  <div className="testTextRow">
                    <FiPhone size={25}/>
                    <a className="testTextRowTitle" href="tel:(647)-977-5354">+1 (647)-977-5354</a>
                  </div>
                </div>
                <div className="test">
                  <div className="testTextRow">
                    <PiBuildingOffice size={25}/>
                    <p className="testTextRowTitle">55 University Ave Suite No. 1100, Toronto, ON M5J 2H7</p>
                  </div>
                </div>
              </div>
            
              <div className="getInTouchContainer">
                
                <div className="getInTouchHeader">
                  <p className="getInTouchTitle">Get In Touch</p>
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
                  <input type="tel" className="phoneInput" placeholder="123-456-7890"/>
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


