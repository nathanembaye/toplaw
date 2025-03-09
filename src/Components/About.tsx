import React from 'react';
import '../Styles/About.css';
import Menu from './Menu.tsx';
import Bush from '../bush.jpg';

function About() {

    const Person = () => {
        return <div className="personContainer">

                  <div className="personImageContainer">
                    <img src={Bush} alt="Headshot" />
                  </div>                 

              <div className="personInfo">

                  <div className="personName">
                    <h1>GEORGE W. BUSH</h1>
                  </div>

                  <div className="personContact">
                    <p><b>OFFICE</b>: (416) 629-4800, ext 101</p>
                  </div>

                  <div className="personContact">
                    <p><b>COLLECT</b>: 1 (833) 628-4801</p>
                  </div>

                  <div className="personContact">
                    <p><b>EMAIL</b>: NATHANEMBAYE@TOPLAW.COM</p>
                  </div>

                  <div className="personBio">
                      <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </p>

                      <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                  </div>

                  </div>

                </div>
    }

  return (
         <>
        <Menu />
        <Person />
        </>
  );
}

export default About;
