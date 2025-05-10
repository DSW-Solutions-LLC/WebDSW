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
    <li className="p-2 group cursor-pointer transition-all duration-300">
      <a
        className="relative inline-block text-white text-lg font-medium transition-all duration-300 group-hover:scale-105"
        href="/#"
        onClick={(e) => scrollToSection(e, referencia)}
      >
        {nombre}
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-800 to-purple-700 transition-all duration-500 group-hover:w-full" />
      </a>
    </li>
  );
}

export default ItemMenu;
