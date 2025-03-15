import React, { useEffect, useState } from 'react';
import '../Styles/Services.css';
import { GoLaw } from "react-icons/go";
import { PiGavel } from "react-icons/pi";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { RiGovernmentLine } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi2";
import { CiViewTimeline } from "react-icons/ci";



function Services() {

  const [buttonDesign, setButtonDesign] = useState(window.innerWidth <= 767 ? 'servicesButtonsColumn' : 'servicesButtonsRow');

  function getIcon(type: string){
    if (type === '0'){
      return  <GoLaw size={30} color='black'/>
    }
    else if (type === '1'){
      return  <PiGavel size={30} color='black'/>
    }
    else if (type === '2') {
      return  <GiPoliceOfficerHead size={30} color='black'/>
    }
    else if (type === '3') {
      return  <RiGovernmentLine size={30} color='black'/>
    }
    else if (type === '4') {
      return  <HiOutlinePencil size={30} color='black'/>
    }
    else if (type === '5') {
      return  <CiViewTimeline size={30} color='black'/>
    }
  }

  function getText(type: string){
    if (type === '0'){
      return <p className="serviceItemTextHeader">Frauds or Mislead</p>
    } 
    else if (type === '1'){
      return <p className="serviceItemTextHeader">Bailes & Warrants</p>
    }
    else if (type === '2') {
      return <p className="serviceItemTextHeader">Federal Drug Crimes</p>
    }
    else if (type === '3') {
      return <p className="serviceItemTextHeader">Traffic Related Crimes</p>
    }
    else if (type === '4') {
      return <p className="serviceItemTextHeader">Family Law</p>
    }
    else if (type === '5') {
      return <p className="serviceItemTextHeader">Business Law</p>
    }
    
  }

       
  window.addEventListener('resize', function(){
    if (window.innerWidth <= 767 && buttonDesign !== 'servicesButtonsColumn'){
      setButtonDesign('servicesButtonsColumn');
    }
    else if (window.innerWidth > 767 && buttonDesign !== 'servicesButtonsRow'){
      setButtonDesign('servicesButtonsRow');
    }


  });

  const ServiceItem = (index: string) => {
    return <div className="serviceItemOuterContainer">
              <div className="serviceItemTop">
                <div className="serviceItemLogoContainer">
                  {getIcon(index)}
                </div>
              </div>
              <div className="serviceItemMiddle">
                {getText(index)}
              </div>
              <div className="serviceItemBottom">
                <p className="serviceItemTextDetails">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
              </div>
          </div>
  }

  function buttonClick(){
    if (window.location.pathname === "/"){
      document.getElementById('contact')?.scrollIntoView({behavior: "smooth"})
    }
  }

  return (
    <div id="services" className="servicesContainer">

      <div className="servicesItemsContainer">

        <div className="servicesTextContainer">
          <p className="servicesTextTitle">Our Services</p>
          <p className="servicesTextSummary">Tailored solutions for your success, elevate your experience with out exceptional and comprehensive services today</p>
        </div>

        <div className={buttonDesign}>
          <div className="servicesButton" onClick={() => buttonClick()}>
            <p className="servicesButtonText">Get Quote</p>
          </div>
          <div className="servicesButtonTwo" onClick={() => buttonClick()}>
            <p className="servicesButtonTextTwo">Learn More</p>
          </div>
        </div>

        <div className="serviceItemsGridContainer">
          {ServiceItem('0')}
          {ServiceItem('1')}
          {ServiceItem('2')}
          {ServiceItem('3')}
          {ServiceItem('4')}
          {ServiceItem('5')}
        </div>

      </div>

    </div>
  );
}

export default Services;
