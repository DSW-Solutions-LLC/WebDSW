import React from 'react';
import '../styles/ContactUs.css' 

function ContactUs() { 
    return (
        <section id='contactus' className="agile-methodology pt-5 pb-5"> 
                 

            <div className="agile-methodology pt-5 pb-5">
                <div className="row">
                    <div className="col-12 container-border-gradient">
                        <div className="container-agile-methodology">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <p className="text-title bold">Contactanos</p>                                    
                                </div>
                                <div className="col-12 text-center">
                                    <p className="text-additional1">Si compartís la adrenalina por crear, por ver cada cambio como una oportunidad y buscás el desafío constante, entonces hablamos el mismo idioma.</p>
                                </div>
                                <div className="col-12 text-center pb-5 col-img-method">
                                    <img src="https://www.thesandbox.com.ar/assets/images/agile-methodology.webp" alt="Methods"/>
                                </div>
                                <div className="col-12 text-center">
                                    <p className="text-additional3">Nuestro crecimiento exponencial ya empezó. <br/> Unite a la experiencia DSW Solutions.</p>
                                </div>
                                <div className="col-12 text-center">
                                    <p className="text-additional3">DSW Solutions - Buenos Aires - Argentina &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <a className="mail-text" href="mailto:info@dswsolutions.com.ar">
                                            <i className="fa fa-envelope icon"></i>
                                            info@dswsolutions.com.ar
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        </section>
    );
}

export default ContactUs;