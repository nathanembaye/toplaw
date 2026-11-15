import React, { useState } from 'react';
import '../Styles/Contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { PiBuildingOffice } from "react-icons/pi";
import emailjs from 'emailjs-com';



function Contact() {

  const [contentDesign, setContentDesign] = useState(window.innerWidth <= 900 ? 'contactColumnContent' : 'contactRowContent');
  const [emailSent, setEmailSent] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });


         
  window.addEventListener('resize', function(){

    // general card design
    if (window.innerWidth <= 900 && contentDesign !== 'contactColumnContent'){
      setContentDesign('contactColumnContent');
    }
    else if (window.innerWidth > 900 && contentDesign !== 'contactRowContent'){
      setContentDesign('contactRowContent');
    }

  });

  // Handle form data changes
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  function validateForm() {
    const firstName = formData.firstName.trim();
    const lastName = formData.lastName.trim();
    const email = formData.email.trim();
    const phoneNumber = formData.phoneNumber.trim();
    const message = formData.message.trim();
  
    // First Name
    if (!firstName) {
      alert("First name is required.");
      return false;
    } else if (!/^[a-zA-Z\s\-']+$/.test(firstName)) {
      alert("First name contains invalid characters.");
      return false;
    }
  
    // Last Name
    if (!lastName) {
      alert("Last name is required.");
      return false;
    } else if (!/^[a-zA-Z\s\-']+$/.test(lastName)) {
      alert("Last name contains invalid characters.");
      return false;
    }
  
    // Email
    if (!email) {
      alert("Email is required.");
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Email is not valid.");
      return false;
    }
  
    // Phone Number
    if (!phoneNumber) {
      alert("Phone number is required.");
      return false;
    } else if (!/^\+?[0-9\s\-()]{7,15}$/.test(phoneNumber)) {
      alert("Phone number is not valid.");
      return false;
    }
  
    // Message
    if (!message) {
      alert("Message is required.");
      return false;
    } else if (message.length < 10) {
      alert("Message must be at least 10 characters long.");
      return false;
    }
  
    return true;
  }
  
  
  

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (validateForm()) {
      setEmailSent(true);
       
      emailjs
        .sendForm(
          'service_tcsszs4', 'template_v5ciqyd', e.target, '_C31_bPVMJZ8EznL_'
        )
        .then(
          (result) => {
            console.log(result.text)
          },
          (error) => {
            console.log(error.text)
          }
        )

    }
   
  }

  return (
    <div id="contact" className="contactContainer">

          <div className="contactContentContainer">
            

            <div className={contentDesign}>

              <div className="testTextContainer">

                <p className="testTextTitle">Contact Us</p>
                <p className="testTextSummary">Reach out to us with any questions or inquiries. We're here to help.</p>

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
                    <p className="testTextRowTitle">439 University Ave Suite No. 1200, Toronto, ON M5G 1Y8</p>
                  </div>
                </div>
              </div>
            
              <div className="getInTouchContainer">
                
                <div className="getInTouchHeader">
                  <p className="getInTouchTitle">Get In Touch</p>
                </div>

                {emailSent ? 
                <div className="emailSent">
                  <p className="emailSentText">Thank you for your message. One of our team members will be in touch with you shortly.</p>
                </div> : 
                  <form onSubmit={handleSubmit}>

                    <div className="nameRow">
                      <div className="nameEntry">
                        <p className="nameText">First Name</p>
                        <input className="nameInput" placeholder="John" name="firstName" onChange={handleChange} value={formData.firstName}/>
                      </div>
                      <div className="nameEntry">
                        <p className="nameText">Last Name</p>
                        <input className="nameInput" placeholder="Doe" name="lastName" onChange={handleChange} value={formData.lastName}/>
                      </div>
                    </div>


                    <div className="emailEntry">
                      <p className="emailText">Email</p>
                      <input className="emailInput" placeholder="johndoe@gmail.com" name="email" onChange={handleChange} value={formData.email}/>
                    </div>

                    <div className="phoneEntry">
                      <p className="phoneText">Phone Number</p>
                      <input type="tel" className="phoneInput" placeholder="123-456-7890" name="phoneNumber" onChange={handleChange} value={formData.phoneNumber}/>
                    </div>


                    <div className="messageEntry">
                      <p className="messageText">Message</p>
                      <textarea className="messageInput" placeholder="Hello, my name is John and I'm looking for representation..." name="message" onChange={handleChange} value={formData.message}/>
                    </div>

                    <button className="getInTouchButton">
                      Send Message
                    </button>
                  </form>
                }

              </div>

         </div>
  

          </div>

    </div>
  );
}

export default Contact;


