import { TECH_STACK_DATA } from '../../constants';
import '../../styles/components/Partners.css';

const Partners = () => {
  return (
    <section id='partners' className='partners section'>
      <div className='container'>
        <div className='partners-header'>
          <h2 className='partners-title'>Tecnologías que utilizamos</h2>
          <p className='partners-subtitle'>
            Trabajamos con tecnologías y plataformas líderes del mercado para desarrollar soluciones a medida, escalables y confiables.
          </p>
        </div>

        <div className='partners-grid'>
          {TECH_STACK_DATA.map(tech => (
            <div key={tech.id} className='partner-item'>
              <span className='partner-name'>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
