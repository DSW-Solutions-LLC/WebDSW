import { PARTNERS_DATA } from '../../constants';
import '../../styles/components/Partners.css';

const Partners = () => {
  return (
    <section id='partners' className='partners section'>
      <div className='container'>
        <div className='partners-header'>
          <h2 className='partners-title'>Nuestros Partners</h2>
          <p className='partners-subtitle'>
            Trabajamos con las mejores tecnologias y plataformas del mercado.
          </p>
        </div>

        <div className='partners-grid'>
          {PARTNERS_DATA.map(partner => (
            <div key={partner.id} className='partner-item'>
              <span className='partner-name'>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
