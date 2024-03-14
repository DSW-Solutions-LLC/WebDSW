
import React from 'react'; 
import Slider from 'react-slick';
import '../styles/CarruselBanner.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


class CarouselBanners extends React.Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500  
       };
  
      return (
        <Slider   {...settings}>       

            <div className="carousel-item">
                <div className="box-slide">
                    <p className="slide-text">Necesitas desarrollar tu App</p>  
                    <p className="slide-text bold">¿dónde lo hacen?</p> 
                    <a className="btn btn-slide" href="/communities.html">Contactanos</a>
                </div>
                <img src="https://www.thesandbox.com.ar/assets/images/banners/banner-slider-04.webp" className="d-block" alt="Diapositiva 1"></img>                   
            </div> 
         
            <div className="carousel-item">
                <div className="box-slide">
                    <p className="slide-text">DSW Solutions</p> 
                    <p className="slide-text">suma valor a tus proyectos</p>  
                    
                </div> 
                    <img src="https://www.thesandbox.com.ar/assets/images/banners/banner-slider-05.webp" className="d-block" alt="Diapositiva 1"></img>
            </div> 

            <div className="carousel-item">
                <div className="box-slide">
                    <p className="slide-text">Un proyecto exitoso</p> 
                    <p className="slide-text">comienza con una charla.</p> 
                    <a className="btn btn-slide" href="/communities.html">Contactanos</a>
                </div> 
                <img src="https://www.thesandbox.com.ar/assets/images/banners/banner-slider-06.webp" className="d-block" alt="Diapositiva 1"></img>
            </div>  

            <div className="carousel-item">
                <div className="box-slide">
                    <p className="slide-text">Conocé algunas de</p>
                    <p className="slide-text">nuestras últimas creaciones</p>
                    <a className="btn btn-slide" href="/communities.html">Proyectos</a>
                </div> 
                <img src="https://www.thesandbox.com.ar/assets/images/banners/banner-slider-07.webp" className="d-block" alt="Diapositiva 1"></img>
            </div> 
        </Slider>
      );
    }
  }
   
export default CarouselBanners;
