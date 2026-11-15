
import React from 'react';
import '../Styles/About.css';

function About() {
  const blurb = (
    <p className="aboutBlurb">
      Tobias Okada-Phillips has been fighting for his client’s rights as a criminal defence lawyer for
over a decade. Mr. Okada-Phillips has practiced all over the province of Ontario. In 2014, he
began practicing criminal law in Ottawa, Ontario. In 2019, he returned home to Toronto to
practice with a large, well-known criminal defence firm. He has conducted hundreds of bail
hearings and hundreds of trials, securing full acquittals before both judges and juries. He has
represented clients on virtually every charge under the Criminal Code and Controlled Drugs
and Substances Act. He understands how judges and juries think. He uses that judgement to
get the best possible result for every client.
    </p>
  );

  const blurb1 = (
    <p className="aboutBlurb aboutBlurb1">
      Randolph De Lano, the Founder of The Real Estate Fund, has a long history
      of ensuring consistently high standards and excellent results for his
      investors. That service will continue to be applied to the properties
      this new Fund acquires and manages.
    </p>
  );

  const blurb2 = (
    <p className="aboutBlurb aboutBlurb2">
      The Real Estate Fund will put its
      investors first with the goal of creating consistent per-property Monthly
      Cash Flow and Capital Growth for their property investments. The Real
      Estate Fund Founder or affiliates will invest directly in every property
      acquisition, so investors can be assured that there is commonality of
      interest in the goals of The Real Estate Fund’s property investments and
      management.
    </p>
  );

  return (
    <div className="aboutContainer" id="about">
      <div className="aboutLayout">
        <div className="aboutHeading">
          <h1 className="aboutTitle">About TOP Law Criminal Defence</h1>
          <p className="aboutSubtitle">
            A CRIMINAL DEFENSE FIRM WITH PROVEN RESULTS
          </p>
        </div>
        <div className="aboutContent">
          {blurb1}

          <div className="aboutImageWrapper">
            <img
              className="personImage"
              src={require('../Assets/tobias4.jpeg')}
              alt="Headshot"
            />
          </div>

          {blurb}
          {blurb2}

          <a
            className="aboutLink"
            href="#/tobias"
          >
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
