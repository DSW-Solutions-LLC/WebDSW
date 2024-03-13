

import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {   fas } from '@fortawesome/free-solid-svg-icons'; 
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import '../styles/ButtonMenu.css'
  
function ButtonMenu(props) {
    const { toggleMenu } = props;
    return (
        <button 
            className="navbar-toggler collapsed" 
            type="button" 
            onClick={toggleMenu} 
            aria-expanded="false" 
            aria-label="Toggle navigation">     
            <MenuTwoToneIcon /> 
        </button>
   
  );
}

export default ButtonMenu;
