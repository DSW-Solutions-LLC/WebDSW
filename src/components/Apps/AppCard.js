import React from 'react';
import { motion } from 'framer-motion';
import useInViewOnce from '../hooks/useInViewOnce';
import useScrollDirection from '../hooks/useScrollDirection';

function AppCard({ app, index }) {
  const [ref, isInView] = useInViewOnce(0.55); // activa cuando llega a la mitad del viewport
  const scrollDir = useScrollDirection();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

  const translateClass = isMobile
    ? scrollDir === 'down'
      ? 'translate-y-6'
      : '-translate-y-6'
    : 'translate-y-6';

  return (
    <motion.div
      ref={ref}
      className={`app-card transition-all duration-500 ease-in-out ${
        isInView ? 'opacity-100 translate-y-0' : `opacity-0 ${translateClass}`
      }`}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <img src={app.img} alt={app.title} className="w-full h-48 object-cover" />
      <div className="p-4 text-center text-white">
        <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
        <p className="text-sm text-zinc-300">{app.text}</p>
      </div>
    </motion.div>
  );
}

export default AppCard;
