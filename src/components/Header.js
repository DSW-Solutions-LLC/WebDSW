 
//import React, { useState, useEffect } from 'react';
import React, { useState  } from 'react';
import '../styles/Header.css'
import ItemMenu from './ItemMenu'
import Logo from './LogoHeader'; 
import ButtonMenu from './ButtonMenu'; 
 


function Header() {
   const [menuVisible, setMenuVisible] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

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
 
      <nav className="navbar navbar-expand-lg navbar-dark">        
        <Logo />
        <ButtonMenu toggleMenu={toggleMenu} />

        <div className="navbar-collapse" id="navbarHeader">
              <ul className="navbar-nav ml-auto my-2 my-lg-0"> 
                <ItemMenu nombre="Soluciones" referencia="#solutions" /> 
                <ItemMenu nombre="Apps" referencia="#solutions1" /> 
                <ItemMenu nombre="Proyectos" referencia="#solutions2" /> 
                <ItemMenu nombre="Clientes" referencia="#solutions3" />  
              </ul>
        </div>
      </nav>    
    </header>
  );
}

export default Header;
