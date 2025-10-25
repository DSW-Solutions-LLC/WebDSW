import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../../constants';
import { useScroll } from '../../hooks/useScroll';
import { classNames } from '../../utils';
import logoDsw from '../../assets/logo_dsw2.png';
import '../../styles/components/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSection, scrollToSection } = useScroll();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = href => {
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className='header'>
      <nav className='nav'>
        <div className='nav-logo'>
          <div className='logo-icon'>
            <img 
              src={logoDsw} 
              alt='DSW Solutions Logo' 
              className='logo-image'
            />
          </div>
          <span className='logo-text'>DSW Solutions</span>
        </div>
        <div className={classNames('nav-links', isMenuOpen && 'active')}>
          {NAVIGATION_ITEMS.map(item => (
            <a
              key={item.id}
              href={item.href}
              className={classNames(
                'nav-link',
                activeSection === item.id && 'active'
              )}
              onClick={e => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
        <button
          className='mobile-menu-btn'
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
