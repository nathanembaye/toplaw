import React from 'react';
import '../Styles/Profile.css';

function Profile() {
  return (
    <section className="tobiasSection" id="tobias">
      <div className="tobiasSquare">
        <div className="tobiasCopy">
          <h1 className="tobiasHeading">Tobias<br />Okada-Phillips</h1>
          <p className="tobiasRole">Founding Partner</p>
          <div className="tobiasContact">
            <a href="mailto:tobias@top-law.ca">tobias@top-law.ca</a>
            <a href="tel:6479775354">647-977-5354</a>
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

          <section className="tobiasCredentials" aria-label="Credentials">
            <div className="tobiasCredentialsGrid">
              <div className="tobiasCredentialGroup">
                <h2>Education</h2>
                <p><span>Juris Doctor, </span><span className="tobiasCredentialMuted">Queen’s University</span></p>
                <p><span>Bachelor of Arts, </span><span className="tobiasCredentialMuted">University of Toronto</span></p>
              </div>

              <div className="tobiasCredentialGroup">
                <h2>Admitted</h2>
                <p><span>Ontario </span><span className="tobiasCredentialMuted">(2012)</span></p>
              </div>

              <div className="tobiasCredentialGroup">
                <h2>Experience</h2>
                <p><span>TOP Law Criminal Defence </span><span className="tobiasCredentialMuted">(2024–Present)</span></p>
                <p><span>Edward Royle &amp; Partners LLP </span><span className="tobiasCredentialMuted">(2012–2024)</span></p>
              </div>
            </div>
          </section>

        </div>
        <div className="tobiasImageFrame">
          <img
            className="tobiasImage"
            src={require('../Assets/tobias.jpeg')}
            alt="Tobias Okada-Phillips"
          />
        </div>
      </div>

    </section>
  );
}

export default Profile;
