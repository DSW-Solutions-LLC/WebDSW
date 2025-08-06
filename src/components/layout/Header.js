import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../../constants';
import { useScroll } from '../../hooks/useScroll';
import { classNames } from '../../utils';
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
