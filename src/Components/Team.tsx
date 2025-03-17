import React, { useState } from 'react';
import '../Styles/Team.css';


function Team() {

  const [userCardDesign, setUserCardDesign] = useState(window.innerWidth <= 767 ? 'teamImageContainerColumn' : 'teamImageContainerRow');


  window.addEventListener('resize', function(){
    if (window.innerWidth <= 767 && userCardDesign !== 'teamImageContainerColumn'){
      setUserCardDesign('teamImageContainerColumn');
    }
    else if (window.innerWidth > 767 && userCardDesign !== 'teamImageContainerRow'){
      setUserCardDesign('teamImageContainerRow');
    }
});


  return (
    <div id="team" className="teamContainer">

        <div className="teamItemsContainer">
          <div className="teamTextContainer">
            <p className="teamTextTitle">Our Team</p>
            <p className="teamTextSummary">We are a legal team made up of innovative, experienced, and proficient individuals. We will put up the best fight for you.</p>
          </div>

          <div className={userCardDesign}>


            <div className="usersAcheivementsCards">
              <div className="userAcheivment">
                <p className="userAcheivmentValue">30+</p>
                <p className="userAcheivmentTitle">YEARS OF EXPERIENCE</p>
              </div>
              <div className="userAcheivment">
                <p className="userAcheivmentValue">5m+</p>
                <p className="userAcheivmentTitle">IN BAIL MADE</p>
              </div>
              <div className="userAcheivment">
                <p className="userAcheivmentValue">3k+</p>
                <p className="userAcheivmentTitle">MINIMUM PENALTY VERDICTS</p>
              </div>
              <div className="userAcheivment">
                <p className="userAcheivmentValue">91%</p>
                <p className="userAcheivmentTitle">NON-GUILTY RATE</p>
              </div>
            </div>


            <div className="userCard">
              <img className="userCardImage"src={require('../Assets/bush.jpg')}/>
              <p className="userCardName">George W. Bush</p>
              <p className="userCardJobTitle">Criminal Defense Attorney</p>
              <a className="userLink" href={"#" + process.env.PUBLIC_URL + "/about"}>Read bio</a>
            </div>

            <div className="userCard">
              <img className="userCardImage" src={require('../Assets/cheney.jpg')}/>
              <p className="userCardName">Vince Cheney</p>
              <p className="userCardJobTitle">Law Clerk</p>
              <a className="userLink" href={"#" + process.env.PUBLIC_URL + "/about"}>Read bio</a>
            </div>

          </div>


        </div>
        

    </div>
  );
}

export default Team;

 