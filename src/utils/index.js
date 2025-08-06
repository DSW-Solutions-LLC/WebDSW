// Smooth scrolling utility
export const scrollToSection = sectionId => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Form validation utilities
export const validateEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateRequired = value => {
  return value && value.trim().length > 0;
};

// Icon mapping utility
export const getIconComponent = iconName => {
  const iconMap = {
    Zap: 'Zap',
    Smartphone: 'Smartphone',
    Link: 'Link',
    Users: 'Users',
    User: 'User',
    Mail: 'Mail',
    MessageSquare: 'MessageSquare',
    Send: 'Send',
    Facebook: 'Facebook',
    Instagram: 'Instagram',
    Twitter: 'Twitter',
    Star: 'Star',
    Code: 'Code',
    Target: 'Target',
    Calendar: 'Calendar',
    Laptop: 'Laptop',
  };

  return iconMap[iconName] || 'Code';
};

// CSS class utilities
export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// Animation utilities
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Responsive breakpoints
export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1200,
};

// Check if device is mobile
export const isMobile = () => {
  return window.innerWidth <= BREAKPOINTS.mobile;
};

// Debounce utility
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
