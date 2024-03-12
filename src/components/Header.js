 
//import React, { useState, useEffect } from 'react';
import '../styles/Header.css'
import ItemMenu from './ItemMenu'
import Logo from './LogoHeader'; 
 


function Header() {
  // const [menuVisible, setMenuVisible] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);

  // const toggleMenu = () => {
  //   setMenuVisible(!menuVisible);
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //     if (scrollTop > 0) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return ( 
    <header className="" >
 
      <nav className="navbar   navbar-expand-lg navbar-dark">        
    <Logo />
      <div className="collapse navbar-collapse" id="navbarHeader">
            <ul className="navbar-nav ml-auto my-2 my-lg-0"> 
              <ItemMenu nombre="Soluciones" referencia="#" /> 
              <ItemMenu nombre="Apps" referencia="#" /> 
              <ItemMenu nombre="Proyectos" referencia="#" /> 
              <ItemMenu nombre="Clientes" referencia="#" />  
            </ul>
        </div>
      </nav>    
    </header>
  );
}

export default Header;
