  
import React from 'react';
import '../styles/Solutions.css' 
 


function Solutions() {
 
  return ( 
    <section id='solutions' className="services pt-5 pb-3">
         <div className="row">
           <div className="col-12 text-center">
                <p className="text-title bold">Soluciones</p>
            </div>
         </div>
         <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 pb-5">
                <div className="border-gradient-services"></div>
                <div className="card">
                    <div className="card-cover">
                        <h5 className="card-title"> Digital Transformation </h5>
                    </div>
                    <div className="card-body text-center">
                        <h5 className="card-title bold">Digital Transformation</h5>
                        <p className="card-text">Generamos productos digitales co-creados con tu equipo.</p>
                        <img src="https://www.thesandbox.com.ar/assets/images/services/digital-transformation.webp" alt="Servicio 1" />
                        <p className="bold">Micrositios</p>
                        <p className="bold">Apps</p>
                        <p className="bold">Landing pages para campañas</p>
                        <p className="bold">Páginas web institucionales</p>
                        <p className="bold">Portales de contenido</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 pb-5">
                <div className="border-gradient-services"></div>
                <div className="card">
                    <div className="card-cover">
                        <h5 className="card-title"> Digital Factory </h5>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 pb-5">
                <div className="border-gradient-services"></div>
                <div className="card">
                    <div className="card-cover">
                        <h5 className="card-title"> Digital Business Growth </h5>
                    </div>
                </div>
            </div>

            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 pb-5">
                <div className="border-gradient-services"></div>
                <div className="card">
                    <div className="card-cover">
                        <h5 className="card-title"> Resource Outsourcing </h5>
                    </div>
                </div>
            </div>
        </div>         
    </section>
  );
}

export default Solutions;
