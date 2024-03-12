
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

            <div class="carousel-item">
                <div className="box-slide"> 
                    <img src="https://www.thesandbox.com.ar/assets/images/banners/banner-slider-04.webp" className="d-block w-100" alt="Diapositiva 1"></img>                   
                </div>
            </div> 
         
            <div class="carousel-item">
                <div className="box-slide">
                    <img src="https://www.thesandbox.com.ar/assets/images/banners/banner-slider-05.webp" className="d-block w-100" alt="Diapositiva 1"></img>
                </div> 
            </div> 

            <div class="carousel-item">
                <div className="box-slide">
                    <img src="https://www.thesandbox.com.ar/assets/images/banners/banner-slider-06.webp" className="d-block w-100" alt="Diapositiva 1"></img>
                </div> 
            </div>  

            <div class="carousel-item">
                <div className="box-slide">
                    <img src="https://www.thesandbox.com.ar/assets/images/banners/banner-slider-07.webp" className="d-block w-100" alt="Diapositiva 1"></img>
                </div> 
            </div> 
        </Slider>
      );
    }
  }
   
export default CarouselBanners;
