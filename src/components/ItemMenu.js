// ItemMenu.js

import React from 'react';

function ItemMenu({ nombre, referencia, handleCloseNav }) {
  const scrollToSection = (event, ref) => {
    event.preventDefault();
    const targetElement = document.querySelector(ref);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
      handleCloseNav();
    }
  };

  return (
    <li className="p-4">
      <a className="text-white" href="/#" onClick={(e) => scrollToSection(e, referencia)}>
        {nombre}
      </a>
    </li>
  );
}

export default ItemMenu;
