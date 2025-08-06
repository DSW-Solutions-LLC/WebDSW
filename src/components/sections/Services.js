import { SERVICES_DATA } from '../../constants';
import '../../styles/components/Services.css';
import officeTeamImage from '../../assets/office-team.png';

const Services = () => {
  const renderServiceCard = service => {
    return (
      <div key={service.id} className='service-card'>
        <h3 className='service-title'>{service.title}</h3>
        <p className='service-subtitle'>{service.subtitle}</p>
        <p className='service-intro'>{service.intro}</p>
        <ul className='service-features'>
          {service.features.map(feature => (
            <li key={`${service.id}-${feature}`} className='service-feature'>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <section id='services' className='services section'>
      <div className='container'>
        <div className='services-header'>
          <h2 className='services-title'>Nuestros Servicios</h2>
        </div>

        <div className='services-grid'>
          {SERVICES_DATA.map(renderServiceCard)}
        </div>

        <div
          className='services-company-card'
          style={{
            background: `
              linear-gradient(
                89.91deg,
                rgba(21, 20, 20, 0.98) 12.61%,
                rgba(119, 40, 192, 0.57) 89.38%
              ),
              url(${officeTeamImage})
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className='company-text'>
            <h3 className='company-motto'>
              Software Factory que crea soluciones tecnológicas innovadoras.
              Nuestro equipo está formado por expertos apasionados.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
