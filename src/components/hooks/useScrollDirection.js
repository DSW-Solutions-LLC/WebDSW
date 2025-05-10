import { useEffect, useState } from 'react';

export default function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState('down');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDir = () => {
      const currentY = window.scrollY;
      const direction = currentY > lastScrollY ? 'down' : 'up';
      if (direction !== scrollDir) {
        setScrollDir(direction);
      }
      lastScrollY = currentY > 0 ? currentY : 0;
    };

    window.addEventListener('scroll', updateScrollDir);
    return () => window.removeEventListener('scroll', updateScrollDir);
  }, [scrollDir]);

  return scrollDir;
}
