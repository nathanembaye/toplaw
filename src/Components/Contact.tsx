import React, { useState } from 'react';
import '../Styles/Contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";



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
            

            <div className={contentDesign}>

              <div className="testTextContainer">
                <p className="testTextTitle">Contact Us</p>
                <p className="testTextSummary">Reach out to us with any questions or inquiries. We're here to help!</p>
                <div className="test">
                  <p className="testOne">Email support</p>
                  <p className="testTwo">Email us and we'll get back to you within 24 hours</p>
                  <div className="testTextRow">
                    <MdOutlineEmail size={20}/>
                    <p className="testTextRowTitle">info@toplaw.com</p>
                  </div>
                </div>
                <div className="test">
                  <p className="testOne">Call us</p>
                  <p className="testTwo">Give us a call and we'll get back to you</p>
                  <div className="testTextRow">
                    <FiPhone size={20}/>
                    <p className="testTextRowTitle">+1 (123)-456-7890</p>
                  </div>
                </div>
                <div className="test">
                  <p className="testOne">Toronto</p>
                  <p className="testTwo">Visit our offices Mon - Fri from 9am-5pm</p>
                  <div className="testTextRow">
                    <IoLocationOutline size={20}/>
                    <p className="testTextRowTitle">624 White Alder Ave</p>
                  </div>
                </div>
                <div className="blurbTestRow">
                  <div className="blurbEntry">
                    <p className="blurbTitle">Customer Support</p>
                    <p className="blurbText">Our support team is available around the clock to address any questions or concerns you may have.</p>
                  </div>
                  <div className="blurbEntry">
                    <p className="blurbTitle">Feedback & Suggestions</p>
                    <p className="blurbText">We value your feedback and are continously working to improve. Your input is cruical in shaping our future.</p>
                  </div>
                  <div className="blurbEntry">
                    <p className="blurbTitle">Media Inquires</p>
                    <p className="blurbText">For media-related questions or press inquires, please contact us with your outlet and the subject matter.</p>
                  </div>
                </div>
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


