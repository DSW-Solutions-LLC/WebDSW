import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import { SOCIAL_LINKS, COMPANY_INFO, FOOTER_LINKS } from '../../constants';
import logoDsw from '../../assets/logo_dsw2.png';
import '../../styles/components/Footer.css';

const Footer = () => {
  const iconMap = {
    Facebook,
    Instagram,
    Linkedin,
    Youtube,
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
          <div className='footer-brand'>
            <div className='footer-logo'>
              <img
                src={logoDsw}
                alt='DSW Solutions Logo'
                className='footer-logo-image'
              />
            </div>
            <p className='footer-tagline'>
              Soluciones tecnologicas innovadoras para impulsar tu negocio.
            </p>
            <div className='social-links'>
              {SOCIAL_LINKS.map(renderSocialLink)}
            </div>
          </div>

          {FOOTER_LINKS.map(section => (
            <div key={section.title} className='footer-section'>
              <h4 className='footer-title'>{section.title}</h4>
              <ul className='footer-links'>
                {section.links.map(link => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='footer-divider' />

        <div className='footer-bottom'>
          <p className='copyright'>{COMPANY_INFO.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
