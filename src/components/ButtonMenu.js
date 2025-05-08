import React from 'react';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import '../styles/ButtonMenu.css';

function ButtonMenu(props) {
  const { toggleMenu } = props;
  return (
    <button
      className="navbar-toggler collapsed"
      type="button"
      onClick={toggleMenu}
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <MenuTwoToneIcon />
    </button>
  );
}

export default ButtonMenu;
