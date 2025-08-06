import { Facebook, Instagram, X, Star } from 'lucide-react';
import { SOCIAL_LINKS, COMPANY_INFO } from '../../constants';
import '../../styles/components/Footer.css';

const Footer = () => {
  const iconMap = {
    Facebook,
    Instagram,
    X,
  };

  const renderSocialLink = social => {
    const IconComponent = iconMap[social.icon];

    return (
      <a key={social.id} href={social.href} className='social-link'>
        <IconComponent className='social-icon' />
      </a>
    );
  };

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-content'>
          <div className='footer-left'>
            <div className='footer-logo'>
              <div className='logo-icon'>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect width='32' height='32' rx='8' fill='#7728c0' />
                  <path d='M8 12L16 8L24 12V20L16 24L8 20V12Z' fill='white' />
                  <path d='M16 8V24' stroke='white' strokeWidth='2' />
                  <path d='M8 12L24 12' stroke='white' strokeWidth='2' />
                </svg>
              </div>
              <span className='logo-text'>{COMPANY_INFO.name}</span>
            </div>
            <div className='social-links'>
              {SOCIAL_LINKS.map(renderSocialLink)}
            </div>
          </div>

          <div className='footer-right'>
            <div className='footer-section'>
              <h4 className='footer-title'>Empresa</h4>
              <ul className='footer-links'>
                <li>
                  <a href='#services'>Servicios</a>
                </li>
                <li>
                  <a href='#projects'>Proyectos</a>
                </li>
                <li>
                  <a href='#about-us'>Sobre nosotros</a>
                </li>
              </ul>
            </div>

            <div className='footer-section'>
              <h4 className='footer-title'>Contacto</h4>
              <ul className='footer-links'>
                <li>
                  <a href={`mailto:${COMPANY_INFO.email}`}>
                    {COMPANY_INFO.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='footer-bottom'>
          <p className='copyright'>{COMPANY_INFO.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
