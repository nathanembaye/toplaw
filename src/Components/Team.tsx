import React from 'react';
import '../Styles/Team.css';
import Bush from '../bush.jpg';
import Cheney from '../cheney.jpg';


function Team() {
  return (
    <div id="team" className="teamContainer">

        <div className="teamTeam">
          <div className="teamImageContainer">
            <img className="teamImage" src={Bush} alt="Headshot" />
          </div>
            <div className="teamNameContainer">
              <a className="teamNameLink" href={"#" + process.env.PUBLIC_URL + "/about"}>George W. Bush</a>
            </div>
            <div className="teamTitleContainer">
              <p className="teamNameJob">Criminal Defense Attorney</p>
            </div>
        </div>

        <div className="teamTeam">
          <div className="teamImageContainer">
            <img className="teamImage" src={Cheney} alt="Headshot" />
          </div>
            <div className="teamNameContainer">
              <a className="teamNameLink" href={"#" + process.env.PUBLIC_URL + "/about"}>Vince Cheney</a>
            </div>
            <div className="teamTitleContainer">
              <p className="teamNameJob">Law Clerk</p>
            </div>
        </div>

    </div>
  );
}

export default Team;

 