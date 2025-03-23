import React, { useState, useEffect } from 'react';
import '../Styles/LandingPage.css';
//  'TopLaw is a criminal defense firm based in Toronto.',
// 'TopLaw represents clients across all of Canada',
// 'Toplaw specializes in all aspects of criminal law.',
import Underline from '../Assets/underline.svg';
function LandingPage() {

  //setting -1 to hide at first
  const [messageIndex, setMessageIndex] = useState(-1);
  const [enabledAnimation, setEnabledAnimation] = useState(false);
  const [imageUrl, setImageUrl] = useState(Underline);

    useEffect(() => {
      //time based url makes svg re-animate every refresh
      const timestamp = new Date().getTime();
      setImageUrl(`${Underline}?${timestamp}`);
    }, []);

  function timeout(delay: number) {
    return new Promise( res => setTimeout(res, delay) );
}

  async function callDelay(){
    await timeout(3000);
    setEnabledAnimation(true);
    setMessageIndex(0);
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


  const messages = [['is a', 'quantitative trading', 'firm based in New York'], 
                    ['is a', 'criminal defense', 'firm based in Toronto'],
                    ['is a', 'computing company', 'based in Shanghai']]


  const LandingPageButton = () => {
    return <div className="landingPageButton">
        <p className="landingPageButtonText">See More</p>
    </div>
  }

  return (
    <div id="landing" className="landingPageContainer">
            <div className="carouselContainer">
          
                    <ul className="carousel">

                      <div className="carouselTitle">
                          <p className="carouselTitleText">TopLaw</p>
                          <img src={imageUrl} className="underline" alt="underline" />
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
