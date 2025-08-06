import { PROJECTS_DATA } from '../../constants';
import '../../styles/components/Projects.css';
import proyexImage from '../../assets/proyEx.png';

const Projects = () => {
  const renderProjectCard = project => (
    <div key={project.id} className='project-card'>
      <div className='project-visual'>
        <img src={proyexImage} alt={project.title} className='project-image' />
      </div>

      <div className='project-content'>
        <h3 className='project-title'>{project.title}</h3>
        <p className='project-description'>{project.description}</p>
      </div>
    </div>
  );

  return (
    <section id='projects' className='projects section'>
      <div className='container'>
        <div className='projects-header'>
          <h2 className='section-title'>Proyectos</h2>
        </div>

        <div className='projects-grid'>
          {PROJECTS_DATA.map(renderProjectCard)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
