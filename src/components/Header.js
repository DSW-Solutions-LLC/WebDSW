import React, { useState } from 'react';
import ItemMenu from './ItemMenu';
import Logo from './LogoHeader';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Header() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  return (
    <header className="bg-black fixed top-0 w-full z-50 shadow-md border-b-2 border-[#0a0a23]">
      <div className="flex justify-between items-center h-36 max-w-[1240px] mx-auto px-4">
        <Logo />
        <ul className="hidden md:flex gap-10">
          <ItemMenu handleCloseNav={closeNav} nombre="Soluciones" referencia="#solutions" />
          <ItemMenu handleCloseNav={closeNav} nombre="Apps" referencia="#apps" />
          <ItemMenu handleCloseNav={closeNav} nombre="Proyectos" referencia="#projects" />
          <ItemMenu handleCloseNav={closeNav} nombre="Contactanos" referencia="#contactus" />
        </ul>
        <div onClick={toggleNav} className="md:hidden cursor-pointer">
          {nav ? (
            <AiOutlineClose size={28} color="white" />
          ) : (
            <AiOutlineMenu size={28} color="white" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed md:hidden top-0 left-0 w-full h-screen bg-black bg-opacity-90 backdrop-blur-md transition-transform duration-500 ease-in-out z-40 ${
          nav
            ? 'translate-y-0 scale-100 opacity-100'
            : '-translate-y-full scale-95 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-white text-2xl font-semibold">
          <ItemMenu handleCloseNav={closeNav} nombre="Soluciones" referencia="#solutions" />
          <ItemMenu handleCloseNav={closeNav} nombre="Apps" referencia="#apps" />
          <ItemMenu handleCloseNav={closeNav} nombre="Proyectos" referencia="#projects" />
          <ItemMenu handleCloseNav={closeNav} nombre="Contactanos" referencia="#contactus" />
        </div>
      </div>
    </header>
  );
}

export default Header;
