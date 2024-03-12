// Logo.js

import React from 'react';
import logo from '../icono/DSW.png';
import '../styles/LogoHeader.css'

function Logo() {
  return (
    <div className="logo-container">
      <img className='logo-img'  src={logo} alt="Logo the DSW Solutions"/>
    </div>
   
  );
}

export default Logo;
