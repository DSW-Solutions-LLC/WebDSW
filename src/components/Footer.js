import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>DSW Solutions</h3>
          <p>Desarrollamos soluciones digitales que potencian tu negocio.</p>
        </div>

        <div className="footer-links">
          <h4>Navegación</h4>
          <ul>
            <li>
              <a href="#solutions">Soluciones</a>
            </li>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contacto</h4>
          <p>
            <FaEnvelope /> info@dswsolutions.com
          </p>
          <div className="footer-socials">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} DSW Solutions. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
