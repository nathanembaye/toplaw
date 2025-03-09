import React from 'react';
import '../Styles/Team.css';
import Bush from '../bush.jpg';
import Cheney from '../cheney.jpg';


function Team() {
  return (
    <div id="team" className="teamContainer">

        <div className="teamTeam">
          <div className="teamImageContainer">
            <img src={Bush} alt="Headshot" />
          </div>
            <div className="teamNameContainer">
              <a href="/bio">George W. Bush</a>
            </div>
            <div className="teamTitleContainer">
              <p>Criminal Defense Attorney</p>
            </div>
        </div>

        <div className="teamTeam">
          <div className="teamImageContainer">
            <img src={Cheney} alt="Headshot" />
          </div>
            <div className="teamNameContainer">
              <a href="/bio">Vince Cheney</a>
            </div>
            <div className="teamTitleContainer">
              <p>Law Clerk</p>
            </div>
        </div>

    </div>
  );
}

export default Team;

 