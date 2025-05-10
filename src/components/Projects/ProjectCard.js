import React from 'react';
import { motion } from 'framer-motion';
import useInViewOnce from '../hooks/useInViewOnce';
import useScrollDirection from '../hooks/useScrollDirection';

function ProjectCard({ project, index }) {
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
      className={`project-card transition-all duration-500 ease-in-out ${
        isInView ? 'opacity-100 translate-y-0' : `opacity-0 ${translateClass}`
      }`}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <img src={project.img} alt={project.title} className="project-img" />
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-text">{project.text}</p>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
