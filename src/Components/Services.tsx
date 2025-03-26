import React, { useEffect, useState } from 'react';
import '../Styles/Services.css';
import { GoLaw } from "react-icons/go";
import { PiGavel } from "react-icons/pi";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { RiGovernmentLine } from "react-icons/ri";
import { IoCar } from "react-icons/io5";
import { CiViewTimeline } from "react-icons/ci";



function Services() {

  function getServiceSummary(service_id: string) {
    switch (service_id) {
      case "0":
        return "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      case "1":
        return "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      case "2":
        return "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      case "3":
          return "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      case "4":
        return "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
      default:
        return "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    }
  }

  function getIcon(type: string) {
    const iconMap: Record<string, any> = {
      "0": <GoLaw size={30} color="black" />,
      "1": <RiGovernmentLine size={30} color="black" />,
      "2": <PiGavel size={30} color="black" />,
      "3": <GiPoliceOfficerHead size={30} color="black" />,
      "4": <IoCar size={30} color="black" />,
      "5": <CiViewTimeline size={30} color="black" />,
    };
  
    return iconMap[type] || null;
  }

  
  function getText(type: string) {
    const textMap: Record<string, string> = {
      "0": "Consultations",
      "1": "Bails",
      "2": "Criminal Trials",
      "3": "Traffic Crimes",
      "4": "Family Law",
      "5": "Business Law",
    };
  
    return textMap[type] || "";
  }

  
  const ServiceItem = (index: string) => {
    return           <div class="grid-item">
                          <div class="circle">{getIcon(index)}</div>
                          <h3 className="gridItemHeader">{getText(index)}</h3>
                          <p className="gridItemText">{getServiceSummary(index)}</p>
                        </div>
  }

  return (
    <div class="servicesContainer">
      <div className="servicesItemsContainer">

        <div className="servicesTextContainer">
          <p className="servicesTextTitle">Our Services</p>
          <p className="servicesTextSummary">Tailored solutions for your success, elevate your experience with our exceptional and comprehensive services today</p>
        </div>

        <div class="grid-container">
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
