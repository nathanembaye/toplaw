import React, { useEffect, useRef, useState } from 'react';
import '../Styles/Contact/Contact.css';
import emailjs from 'emailjs-com';



function Form() {

  const [contentDesign, setContentDesign] = useState(window.innerWidth <= 900 ? 'contactColumnContent' : 'contactRowContent');
  const [emailSent, setEmailSent] = useState(false);
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (!('IntersectionObserver' in window)) {
      setHasEnteredViewport(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setHasEnteredViewport(true);
      observer.disconnect();
    }, { threshold: 0.15 });

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

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
    <div
      ref={sectionRef}
      id="contact"
      className={`contactContainer${hasEnteredViewport ? ' contactContainer--visible' : ''}`}
    >

          <div className="contactContentContainer">
            

            <div className={contentDesign}>

              <div className="testTextContainer">
                <div className="contactIntro">
                  <h1 className="testTextTitle">Contact Us</h1>
                  <p className="testTextSummary">Whether you have a question or need legal representation, our office is available to discuss your matter. Choose the way you'd prefer to get in touch.</p>
                </div>

                <div className="contactInfoList">
                  <div className="test contactInfoSection">
                    <div className="testTextRow">
                      <h2 className="contactInfoHeading">Call</h2>
                      <p className="contactInfoBlurb">Speak directly with our office about your legal matter.</p>
                      <a className="testTextRowTitle" href="tel:6479775354">647-977-5354</a>
                    </div>
                  </div>
                  <div className="test contactInfoSection">
                    <div className="testTextRow">
                      <h2 className="contactInfoHeading">Text</h2>
                      <p className="contactInfoBlurb">Send our office a text message to arrange a consultation.</p>
                      <a className="testTextRowTitle" href="sms:+16479159325">647-915-9325</a>
                    </div>
                  </div>
                  <div className="test contactInfoSection">
                    <div className="testTextRow">
                      <h2 className="contactInfoHeading">Email</h2>
                      <p className="contactInfoBlurb">Prefer to write? Send us a message at your convenience.</p>
                      <a className="testTextRowTitle" href="mailto:info@top-law.ca">info@top-law.ca</a>
                    </div>
                  </div>
                  <div className="test officeEntry contactInfoSection">
                    <div className="testTextRow officeAddressRow">
                      <h2 className="contactInfoHeading">Address</h2>
                      <p className="contactInfoBlurb">Visit our Toronto office by appointment.</p>
                      <a
                        className="testTextRowTitle officeAddress"
                        href="https://www.google.com/maps/search/?api=1&query=439+University+Ave+Suite+No.+1200%2C+Toronto%2C+ON+M5G+1Y8"
                        target="_blank"
                        rel="noreferrer"
                      >
                        439 University Ave Suite No. 1200,<br /> Toronto, ON M5G 1Y8
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="getInTouchContainer">
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
                      <p className="emailText">Email Address</p>
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
                      Send Inquiry
                    </button>
                  </form>
                }

              </div>

         </div>
  

          </div>

    </div>
  );
}

export default Form;


