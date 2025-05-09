import React from 'react';
import '../styles/Projects.css'; // Asegurate que esté importado

function Projects() {
  const projects = [
    {
      title: 'Dashboard Administrativo',
      img: 'https://img.ticpymes.es/wp-content/uploads/2023/07/19161125/AdobeStock_573838027-1024x546.jpeg.webp',
      text: 'Sistema interno de gestión de tareas y KPIs para equipos de tecnología.',
    },
    {
      title: 'App e-Commerce',
      img: 'https://empresa.org.ar/wp-content/uploads/2019/01/gestion-de-proyectos-1-820x535.jpeg',
      text: 'Aplicación móvil multiplataforma para ventas online con pasarela de pago.',
    },
    {
      title: 'Sitio Web Corporativo',
      img: 'https://itequia.com/wp-content/uploads/2023/09/magnitud.jpg',
      text: 'Rediseño completo de presencia digital para una empresa internacional.',
    },
    {
      title: 'Integración con IA',
      img: 'https://www.aden.org/wp-content/uploads/sites/9/2019/01/Gestion-proyecto1.jpg',
      text: 'Implementación de un sistema inteligente de respuestas automáticas con GPT.',
    },
  ];

  return (
    <section id="projects" className="bg-black text-white pt-5 pb-10 scroll-mt-32">
      <div className="mb-8 text-center">
        <p className="projects-title">Proyectos</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} className="project-img" />
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-text">{project.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
