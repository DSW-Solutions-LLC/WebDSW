import { SERVICES_DATA } from '../../constants';
import '../../styles/components/Services.css';

const Services = () => {
  const renderServiceCard = service => {
    const IconComponent = service.icon;

    return (
      <div key={service.id} className='service-card'>
        <div className='service-icon-wrapper'>
          <IconComponent size={32} className='service-icon' />
        </div>
        <h3 className='service-title'>{service.title}</h3>
        <p className='service-description'>{service.description}</p>
      </div>
    );
  };

  return (
    <section id='services' className='services section'>
      <div className='container'>
        <div className='services-header'>
          <h2 className='services-title'>Nuestros Servicios</h2>
          <p className='services-subtitle'>
            Soluciones integrales para impulsar la transformacion digital de tu
            empresa.
          </p>
        </div>

        <div className='services-grid'>
          {SERVICES_DATA.map(renderServiceCard)}
        </div>
      </div>
    </section>
  );
};

export default Services;
