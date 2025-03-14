import React, { useState } from 'react';
import '../Styles/Menu.css';
import { IoIosMenu } from "react-icons/io";


function Menu(props: any) {

  const [active, setActive] = useState<boolean>(window.location.href.includes('about') ? true : false);

  document.body.addEventListener('scroll', function () { 
        // toggle activity on homepage only
        if (!window.location.href.includes('about')){
            if (document.body.scrollTop >= 300) {
              setActive(true);
            } 
            else {
              setActive(false);
            }
        }
  });


  function menuClick(item: string){
    if (window.location.pathname === "/"){
      document.getElementById(item)?.scrollIntoView({behavior: "smooth"})
    }
    else {
      window.location.href = window.location.origin + "?section=" + item
    }

  }
    // <IoIosMenu size={50} color={active ? 'gray' : 'white'}/> 
  return (
    <div className={active ? "menuContainerActive" : "menuContainerUnactive"} id="mainMenu">
        <div className="menuLogo">
          <a className={active ? "menuTitleActive" : "menuTitle"} href="/"></a>
        </div>
        <div className="menuOptions">
          <a className={active ? "menuLinksActive" : "menuLinks"} onClick={() => menuClick("landing")}></a>
          <a className={active ? "menuLinksActive" : "menuLinks"} onClick={() => menuClick("services")}></a>
          <a className={active ? "menuLinksActive" : "menuLinks"} onClick={() => menuClick("team")}></a>
          <a className={active ? "menuLinksActive" : "menuLinks"} onClick={() => menuClick("contact")}></a>
        </div>
        <div className="burgerMenu">
          <div className="burgerIcon" onClick={() => props.setIsMenuOpen(true)}>
            <IoIosMenu size={50} color="transparent"/>       
          </div>
        </div>
      </div>
  );
}

export default Menu;
