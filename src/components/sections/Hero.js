import '../../styles/components/Hero.css';
import codeImage from '../../assets/code.png';
import pcheroImage from '../../assets/pchero.png';

const Hero = () => {
  return (
    <section id='home' className='hero'>
      <div
        className='hero-background'
        style={{
          backgroundImage: `url(${codeImage})`,
          opacity: 0.2,
          mixBlendMode: 'luminosity',
        }}
      />
      <div className='container'>
        <div className='hero-content'>
          <h1 className='hero-title'>Innovación y Tecnología al alcance</h1>
          <p className='hero-subtitle'>
            Desarrollamos soluciones a medida para potenciar tu negocio.
          </p>
          <button className='hero-btn'>Contáctanos</button>
        </div>

        <div className='hero-visual'>
          <img
            src={pcheroImage}
            alt='DSW Solutions Hero'
            className='hero-image'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
