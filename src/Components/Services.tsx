import React, { useEffect, useState } from 'react';
import '../Styles/Services.css';
import { GoLaw } from "react-icons/go";
import { PiGavel } from "react-icons/pi";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { RiGovernmentLine } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi2";
import { CiViewTimeline } from "react-icons/ci";



function Services() {

  const [iconSize, setIconSize] = useState<boolean>('2vw');

  function getIcon(type: number){
    if (type === 1){
      return  <GoLaw size={iconSize} color='white'/>
    }
    else if (type === 2){
      return  <PiGavel size={iconSize} color='white'/>
    }
    else if (type === 3) {
      return  <GiPoliceOfficerHead size={iconSize} color='white'/>
    }
    else if (type === 4) {
      return  <RiGovernmentLine size={iconSize} color='white'/>
    }
    else if (type === 5) {
      return  <HiOutlinePencil size={iconSize} color='white'/>
    }
    else if (type === 6) {
      return  <CiViewTimeline size={iconSize} color='white'/>
    }
  }

  function getText(type: number){
    if (type === 1){
      return <p>Frauds or Mislead</p>
    } 
    else if (type === 2){
      return <p>Bailes & Warrants</p>
    }
    else if (type === 3) {
      return <p>Federal Drug Crimes</p>
    }
    else if (type === 4) {
      return <p>Traffic Related Crimes</p>
    }
    else if (type === 5) {
      return <p>Family Law</p>
    }
    else if (type === 6) {
      return <p>Business Law</p>
    }
    
  }

       
  window.addEventListener('resize', function(){
    if (window.innerWidth <= 767 && iconSize !== '3vw'){
      console.log('Size switched to 3vw');
      setIconSize('4vw');
    }
    else if (window.innerWidth > 767 && iconSize !== '2vw'){
      console.log('Size switched to 2vw');
      setIconSize('2vw');
    }
  });

  const ServiceItem = (type: number) => {
    return <div className="serviceItemContainer">
              <div className="serviceItemLeftContainer">
                <div className="serviceItemLogoContainer">
                    {getIcon(type)}
                </div>
              </div>
              <div className="serviceItemRightContainer">
                <div className="serviceItemTextContainer">
                  {getText(type)}
                </div>
              </div>
          </div>
  }

  return (
    <div id="services" className="servicesContainer">
      <div className="servicesTextContainer">
        <p>TOPLAW IS A LEADING CANADIAN CRIMINAL DEFENCE FIRM.</p>
        <p>WE ARE BASED IN TORONTO AND TAKE CASES ACROSS THE COUNTRY.</p>
        <p>WE SPECIALIZE IN ALL ASPECTS OF CRIMINAL LAW.</p>
      </div>

      <div className="servicesItemsContainer">
        <div className="serviceItemsGridContainer">
          {ServiceItem(1)}
          {ServiceItem(2)}
          {ServiceItem(3)}
          {ServiceItem(4)}
          {ServiceItem(5)}
          {ServiceItem(6)}
        </div>
      </div>
    </div>
  );
}

export default Services;
