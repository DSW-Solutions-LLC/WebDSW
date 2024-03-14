// ItemMenu.js

import React  from 'react'; 

function ItemMenu({ nombre, referencia }) {

  const scrollToSection = (event, ref) => {
    event.preventDefault();
    const targetElement = document.querySelector(ref);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    // <li className='nav-item'>
    //   <a className='nav-link no-underline' href='/#' >{nombre}</a> 
    // </li>
    <li className='nav-item'>
    <a className='nav-link no-underline' href='/#' onClick={(e) => scrollToSection(e, referencia)}>{nombre}</a> 
  </li>
  );
}

export default ItemMenu;
