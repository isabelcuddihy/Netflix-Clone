import React, { useEffect } from 'react';
import './Nav.css';


function Nav() {

    //Scroll listener so black bar only shows up once user starts scrolling down page
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
        if(window.scroll > 1){
           //handleShow(true); 
        }
        else handleShow(false);
    });
    return () => {
        window.removeEventListener("scroll");
    };

  }, []);

    return (
    <div className="nav">
        <img
        className="nav_logo"
        src={require('./image/Netflix_Logo_RGB.png')}
        alt="Netflix Logo"
        />

<img
        className="nav_avatar"
        src={require('./image/Panda_Avatar.png')}
        alt="Netflix Profile Avatar"
        />
      
    </div>
  )
}

export default Nav
