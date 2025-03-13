import React, { useState, useEffect } from 'react';
import '../Styles/LandingPage.css';
//  'TopLaw is a criminal defense firm based in Toronto.',
// 'TopLaw represents clients across all of Canada',
// 'Toplaw specializes in all aspects of criminal law.',
import Underline from '../test.svg';

function LandingPage() {

  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setMessageIndex(messageIndex => messageIndex + 1 === 3 ? 0 : messageIndex + 1)
    }, 5000);
    
    return () => clearInterval(interval);

  }, []);


  const messages = [['is a', 'quantitative trading', 'firm based in New York city'], 
                    ['is a', 'criminal defense', 'firm based in Toronto'],
                    ['is a', 'computing company', 'based in Shanghai']]



  return (
    <div id="landing" className="landingPageContainer">
            <div className="carouselContainer">
          
                    <ul className="carousel">

                      <div className="carouselTitle">
                          <p className="carouselTitleText">TopLaw</p>
                          <img src={Underline} className="underline"/>
                      </div>

                      
                      {messageIndex == 0 && <>
                                              <li className="carouselItem">{messages[0][0]}</li>
                                              <li className="carouselItem">{messages[0][1]}</li>
                                              <li className="carouselItem">{messages[0][2]}</li>
                                              </>}
                      {messageIndex == 1 && <>
                                              <li className="carouselItem">{messages[1][0]}</li>
                                              <li className="carouselItem">{messages[1][1]}</li>
                                              <li className="carouselItem">{messages[1][2]}</li>
                                            </>}
                      {messageIndex == 2 && <>
                                        
                                            <li className="carouselItem">{messages[2][0]}</li>
                                            <li className="carouselItem">{messages[2][1]}</li>
                                            <li className="carouselItem">{messages[2][2]}</li>
                                            </>}
                    </ul>
              </div>
    </div>
  );
}

export default LandingPage;
