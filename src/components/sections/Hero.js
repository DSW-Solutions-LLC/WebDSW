import { useScroll } from '../../hooks/useScroll';
import '../../styles/components/Hero.css';

const Hero = () => {
  const { scrollToSection } = useScroll();

  return (
    <section id='home' className='hero'>
      <div className='hero-animated-bg' />
      <div className='hero-overlay' />

      {/* Uncomment when you have a video file:
      <video
        className='hero-video'
        autoPlay
        muted
        loop
        playsInline
      >
        <source src='/path-to-video.mp4' type='video/mp4' />
      </video>
      */}

      <div className='hero-center'>
        <h1 className='hero-title'>
          Donde la ingenieria global se encuentra con la confianza local
        </h1>
        <p className='hero-subtitle'>
          Desarrollamos soluciones tecnologicas a medida para potenciar tu
          negocio con innovacion y calidad.
        </p>
        <button
          className='hero-cta'
          onClick={() => scrollToSection('contact')}
        >
          Hablemos de tu proyecto
        </button>
      </div>
    </section>
  );
};

export default Hero;
