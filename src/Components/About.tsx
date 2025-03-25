import React from 'react';
import '../Styles/About.css';
import Menu from './Menu.tsx';
import Footer from './Footer.tsx';

function About() {

    const Person = () => {
        return <div className="personContainer">

                  <div className="personImageContainer">
                    <img className="personImage" src={require('../Assets/bush.jpg')} alt="Headshot" />
                  </div>                 

              <div className="personInfo">

                  <div className="personName">
                    <h1>Tobias Okada Phillips</h1>
                  </div>

                  <div className="personContact">
                    <b className="personContactTextBold">OFFICE:</b>
                    <a href="tel:(647)-977-53543">+1 (647)-977-53543</a>
                  </div>

                  <div className="personContact">
                  <b className="personContactTextBold">DIRECT:</b>
                    <a className="personContactText" href="tel: (647)-915-9325">+1 (647)-915-9325</a>
                  </div>

                  <div className="personContact">
                    <b className="personContactTextBold">EMAIL:</b>
                    <a className="personContactText" href="mailto:tobias@top-law.ca">tobias@top-law.ca</a>
                  </div>

                  <div className="personBio">
                      <p className="personBioText">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p className="personBioText">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p className="personBioText">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p className="personBioText">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                  </div>

                  </div>

                </div>
    }

  return (
         <>
        <Person />
        <Footer/>
        </>
  );
}

export default About;
