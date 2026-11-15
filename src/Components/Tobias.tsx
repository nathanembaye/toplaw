import React from 'react';
import '../Styles/Tobias.css';

function Tobias() {
  return (
    <section className="tobiasSection">
      <div className="tobiasSquare">
        <div className="tobiasCopy">
          <h1 className="tobiasHeading">Tobias Okada-Phillips</h1>
          <p className="tobiasRole">Lead Counsel</p>
          <div className="tobiasContact">
            <a href="mailto:tobias@top-law.ca">tobias@top-law.ca</a>
            <a href="tel:+16479155325">(647) 915-9325</a>
          </div>
          <div className="tobiasBlurb">
            <p>
              Tobias Okada-Phillips has been fighting for his client’s rights as a criminal defence lawyer for over a decade. Mr. Okada-Phillips has practiced all over the province of Ontario. In 2014, he began practicing criminal law in Ottawa, Ontario.
            </p>
            <p>
              In 2019, he returned home to Toronto to practice with a large, well-known criminal defence firm. He has conducted hundreds of bail hearings and hundreds of trials, securing full acquittals before both judges and juries. He has represented clients on virtually every charge under the Criminal Code and Controlled Drugs and Substances Act. He understands how judges and juries think. He uses that judgement to get the best possible result for every client.
            </p>
            <p>
              At trial, Mr. Okada-Phillips searches tirelessly for every possible defence. He prides himself on searching for defences that other lawyers may miss. Fundamentally, he believes that the best possible results are secured after trial, where a defence can be presented, either under the Canadian Charter of Rights and Freedoms or based on the evidence.
            </p>
            <p>
              If you or a loved one are facing criminal charges, please do not hesitate to reach out to Mr. Okada-Phillips. In his view, it is critically important to begin the defence of criminal allegations as soon as possible.
            </p>
          </div>
        </div>
        <div className="tobiasImageFrame">
          <img
            className="tobiasImage"
            src={require('../Assets/tobias4.jpeg')}
            alt="Tobias Okada-Phillips"
          />
        </div>
      </div>
    </section>
  );
}

export default Tobias;
