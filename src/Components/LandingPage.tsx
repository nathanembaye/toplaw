import React, { useState, useEffect } from 'react';
import '../Styles/LandingPage.css';
//  'TopLaw is a criminal defense firm based in Toronto.',
// 'TopLaw represents clients across all of Canada',
// 'Toplaw specializes in all aspects of criminal law.',
import Underline from '../test.svg';

function LandingPage() {

  //setting -1 to hide at first
  const [messageIndex, setMessageIndex] = useState(-1);
  const [enabledAnimation, setEnabledAnimation] = useState(false);

  function timeout(delay: number) {
    console.log('Calling timer...')
    return new Promise( res => setTimeout(res, delay) );
}

  async function callDelay(){
    await timeout(2000);
    setEnabledAnimation(true);
    setMessageIndex(0)
  }


  useEffect(() => { 

    // after 5 seconds animation is enabled (svg is set to 5s too)
    callDelay();

    if (enabledAnimation){
      const interval = setInterval(() => {
        setMessageIndex(messageIndex => messageIndex + 1 === 3 ? 0 : messageIndex + 1);
      }, 5000);
  
      return () => clearInterval(interval);
    }


  }, [enabledAnimation]);


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

                      {messageIndex == -1 && <>
                                              <li className="carouselItemHide">{messages[0][0]}</li>
                                              <li className="carouselItemHide">{messages[0][1]}</li>
                                              <li className="carouselItemHide">{messages[0][2]}</li>
                                              </>}


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
