import React from 'react';
import Slider from 'react-slick';
import '../styles/CarruselBanner.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class CarouselBanners extends React.Component {
  scrollToSection = (e, ref) => {
    e.preventDefault();
    const element = document.querySelector(ref);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  render() {
    const settings = {
      dots: true,
      dotsClass: 'slick-dots slick-dots-custom',
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: 'ease-in-out',
      fade: false,
      // cambia la forma del carrusel | fade: true
      arrows: false,
    };

    const slides = [
      {
        text1: 'DSW Solutions',
        text2: 'suma valor a tus proyectos',
        button: 'Soluciones',
        link: '#solutions',
        img: 'https://i.pinimg.com/736x/43/9e/07/439e0745fd00e29a1f6a4d10b41d425e.jpg',
      },
      {
        text1: 'Necesitas desarrollar tu App',
        text2: '¿de qué tipo?',
        button: 'Aplicaciones',
        link: '#apps',
        img: 'https://i.pinimg.com/736x/43/9e/07/439e0745fd00e29a1f6a4d10b41d425e.jpg',
      },
      {
        text1: 'Conocé algunas de',
        text2: 'nuestras últimas creaciones',
        button: 'Proyectos',
        link: '#projects',
        img: 'https://i.pinimg.com/736x/43/9e/07/439e0745fd00e29a1f6a4d10b41d425e.jpg',
      },
      {
        text1: 'Un proyecto exitoso',
        text2: 'comienza con una charla.',
        button: 'Contactanos',
        link: '#contactus',
        img: 'https://i.pinimg.com/736x/43/9e/07/439e0745fd00e29a1f6a4d10b41d425e.jpg',
      },
    ];

    return (
      <div className="carousel-container">
        <Slider {...settings}>
          {slides.map((item, i) => (
            <div key={i} className="carousel-item-modern">
              <img src={item.img} alt={`Banner ${i}`} className="carousel-img" />
              <div className="fade-overlay"></div>
              <div className="overlay-text">
                <p className="slide-text">{item.text1}</p>
                <p className="slide-text bold">{item.text2}</p>
                {item.button && (
                  <a
                    className="btn-modern"
                    href={item.link}
                    onClick={(e) => this.scrollToSection(e, item.link)}
                  >
                    {item.button}
                  </a>
                )}
              </div>

              <div className="gradient-left"></div>
              <div className="gradient-right"></div>
              <div className="gradient-top"></div>
              <div className="gradient-bottom"></div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default CarouselBanners;
