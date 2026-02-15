import { useState, useEffect, useCallback } from 'react';
import { debounce } from '../utils';

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = useCallback(
    debounce(() => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolling(true);

      const sections = [
        'home',
        'services',
        'stats',
        'success-stories',
        'partners',
        'contact',
      ];
      const sectionElements = sections.map(id => document.getElementById(id));

      let currentSection = 'home';
      let maxVisibleArea = 0;

      sectionElements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const visibleHeight =
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

          if (visibleHeight > maxVisibleArea && rect.top <= 200) {
            maxVisibleArea = visibleHeight;
            currentSection = sections[index];
          }
        }
      });

      setActiveSection(currentSection);
      setTimeout(() => setIsScrolling(false), 150);
    }, 10),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = useCallback(sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  }, []);

  return {
    scrollY,
    isScrolling,
    activeSection,
    scrollToSection,
  };
};
