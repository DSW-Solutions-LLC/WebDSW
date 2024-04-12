import React from 'react';
import '../styles/ContactUs.css' 

function ContactUs() { 
    return (
        <section id='contactus' className="agile-methodology pt-5 pb-5 bg-black"> 
                 
            <div className="agile-methodology pt-5 pb-5 text-white">
                <div className='mt-28'>
                    <div className="row">
                        <div className="col-12 container-border-gradient">
                            <div className="container-agile-methodology">
                                <div className="row justify-center items-center">
                                    <div className="text-center">
                                        <p className=' font-bold text-4xl m-0'>Contactanos</p>
                                    </div>
                                 
                                    <div className="col-12 text-center text-2xl">
                                        <p>Si compartís la adrenalina por crear, por ver cada cambio como una oportunidad y buscás el desafío constante, entonces hablamos el mismo idioma.</p>
                                    </div>
                                    <div className='hidden sm:block'>
                                        <img src="https://www.thesandbox.com.ar/assets/images/agile-methodology.webp" alt="Methods"/>
                                    </div>
                                    <div className="col-12 text-center text-2xl">
                                        <p>Nuestro crecimiento exponencial ya empezó. <br/> Unite a la experiencia DSW Solutions.</p>
                                    </div>
                                    <div className="col-12 text-center text-2xl">
                                        <p>DSW Solutions - Buenos Aires - Argentina &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <a className="mail-text" href="mailto:info@dswsolutions.com.ar">                                                 
                                                info@dswsolutions.com.ar
                                            </a>
                                        </p>
                                    </div>
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