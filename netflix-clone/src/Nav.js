import React from 'react';
import './Nav.css';


function Nav() {
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
