import React from 'react';
import Slider from 'react-slick';
import '../styles/CarruselBanner.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow next" onClick={onClick}>
      <FiChevronRight size={30} />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow prev" onClick={onClick}>
      <FiChevronLeft size={30} />
    </div>
  );
}

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
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: 'ease-in-out',
      fade: true,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    const slides = [
      {
        text1: 'DSW Solutions',
        text2: 'suma valor a tus proyectos',
        button: 'Soluciones',
        link: '#solutions',
        img: 'https://www.thesandbox.com.ar/assets/images/banners/banner-slider-05.webp',
      },
      {
        text1: 'Necesitas desarrollar tu App',
        text2: '¿de qué tipo?',
        button: 'Aplicaciones',
        link: '#apps',
        img: 'https://www.thesandbox.com.ar/assets/images/banners/banner-slider-04.webp',
      },
      {
        text1: 'Conocé algunas de',
        text2: 'nuestras últimas creaciones',
        button: 'Proyectos',
        link: '#projects',
        img: 'https://www.thesandbox.com.ar/assets/images/banners/banner-slider-05.webp',
      },
      {
        text1: 'Un proyecto exitoso',
        text2: 'comienza con una charla.',
        button: 'Contactanos',
        link: '#contactus',
        img: 'https://www.thesandbox.com.ar/assets/images/banners/banner-slider-06.webp',
      },
    ];

    return (
      <div className="carousel-container">
        <Slider {...settings}>
          {slides.map((item, i) => (
            <div key={i} className="carousel-item-modern">
              <img src={item.img} alt={`Banner ${i}`} className="carousel-img" />
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
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default CarouselBanners;
