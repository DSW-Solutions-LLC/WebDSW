 
 import React, { useState  } from 'react';
//import '../styles/Header.css'
import ItemMenu from './ItemMenu'
import Logo from './LogoHeader'; 
//import ButtonMenu from './ButtonMenu'; 
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
 


function Header() {
  const [nav, setNav] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleCloseNav = () => {
    setNav(!nav);
  };



  return ( 
    <header className='bg-black fixed  top-0 w-full z-50' >
        
        {/* <ButtonMenu toggleMenu={toggleMenu} /> */}
        <div className="border-gradient"></div>
        <div className='flex justify-between items-center h-28 md:h-32 max-w-[1240px] mx-auto px-4' id="navbarHeader">
        <Logo />
              <ul className='hidden md:flex'> 
                <ItemMenu handleCloseNav={()=>{}} nombre="Soluciones" referencia="#solutions" /> 
                <ItemMenu handleCloseNav={()=>{}} nombre="Apps" referencia="#apps" /> 
                <ItemMenu handleCloseNav={()=>{}} nombre="Proyectos" referencia="#projects" /> 
                <ItemMenu handleCloseNav={()=>{}} nombre="Contactanos" referencia="#contactus" />  
              </ul>
              <div onClick={handleNav} className='block md:hidden' >
                { nav ? <AiOutlineClose size={30} color='white' /> :
                <AiOutlineMenu size={30} color='white' /> }
              </div> 
              <div className={nav ? 'fixed z-50 left-0 top-24 w-[100%] ease-in-out duration-500 bg-black' : 'fixed left-[-100%]'}> 
                <ul className=' pt-1 uppercase '> 
                  <ItemMenu handleCloseNav={handleCloseNav}  nombre="Soluciones" referencia="#solutions"  /> 
                  <ItemMenu handleCloseNav={handleCloseNav}  nombre="Apps" referencia="#apps" /> 
                  <ItemMenu handleCloseNav={handleCloseNav}  nombre="Proyectos" referencia="#projects" /> 
                  <ItemMenu handleCloseNav={handleCloseNav}  nombre="Contactanos" referencia="#contactus" />  
                </ul>
              </div> 
        </div> 
    </header>
  );
}

export default Header;
