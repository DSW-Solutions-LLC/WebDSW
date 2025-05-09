import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoDSW from '../icono/DSW2.png';

function LogoHeader() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div onClick={handleClick} className="cursor-pointer inline-block">
      <img src={logoDSW} alt="Logo" className="size-36 md:size-40 xl:size-52" />
    </div>
  );
}

export default LogoHeader;
