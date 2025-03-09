import React, { useEffect } from 'react';
import '../Styles/Menu.css';
import { IoIosMenu } from "react-icons/io";


function Menu(props: any) {

  window.addEventListener('scroll', function () { 

    const myNav = document.getElementById('navigationMenu');

    const path = window.location.pathname;
    
    if (path !== '/'){
      return
    }

    if (window.scrollY >= 300 && myNav) {
        myNav.classList.add("menuContainerTwo");
        myNav.classList.remove("menuContainer");
    } 
    else {
        if (myNav) {
          myNav.classList.add("menuContainer");
          myNav.classList.remove("menuContainerTwo");
        }
    }
  });

  useEffect(() => {
    const path = window.location.pathname;
    if (path !== '/'){
      const myNav = document.getElementById('navigationMenu');
      if (myNav) {
        myNav.classList.add("menuContainerTwo");
      }
    }
    
  }, []);

  function menuClick(item: string){

    if (window.location.pathname === "/"){
      document.getElementById(item)?.scrollIntoView({behavior: "smooth"})
    }

    else {
      window.location.href = window.location.origin + "?section="+item
    }

  }

          
  return (
    <div className="menuContainer" id="navigationMenu">
      <div className="menuLogo">
        <a className="menuTitle" href="/">TopLaw</a>
      </div>
      <div className="menuOptions">
        <a className="menuLinks" onClick={() => menuClick("landing")}>HOME</a>
        <a className="menuLinks" onClick={() => menuClick("team")}>TEAM</a>
        <a className="menuLinks" onClick={() => menuClick("services")}>SERVICES</a>
        <a className="menuLinks" onClick={() => menuClick("contact")}>CONTACT</a>
      </div>
      <div className="burgerMenu">
        <div className="burgerIcon" onClick={() => props.setIsMenuOpen(true)}>
          <IoIosMenu size={50} color='white'/>       
        </div>
      </div>
    </div>
  );
}

export default Menu;
