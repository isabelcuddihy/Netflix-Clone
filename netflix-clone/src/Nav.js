import React, { useState, useEffect } from 'react';
import './Nav.css';


function Nav() {
    const [show, handleShow] = useState(false);

    //Scroll listener so black bar only shows up once user starts scrolling down page
   
  useEffect(() => {
    window.addEventListener("scroll", () => {
        if(window.scrollY > 100){
           handleShow(true); 
        }
        else handleShow(false);
    });
    return () => {
        window.removeEventListener("scroll", this);
    };

  }, []);

    return (
    <div className={`nav ${show && "nav_black"}`}>
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
