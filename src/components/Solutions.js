  
import React from 'react';
import '../styles/Solutions.css'  
import mobile from '../images/mobile3.png';
import ItemSolutions from './ItemSolutions';
 


function Solutions() {
 
  return ( 
    <section id='solutions' className="services pt-5 pb-3">
         <div className="row">
           <div className="col-12 text-center">
                <p className="text-title bold">Soluciones</p>
            </div>
         </div>
         <div className="row">
            
            <ItemSolutions 
                title = "Automatizaciones" 
                img= "https://www.thesandbox.com.ar/assets/images/services/digital-transformation.webp" 
                text="Generamos productos digitales co-creados con tu equipo." 
                arrayText={[ 
                    "Micrositios",
                    "Apps",
                    "Landing pages para campañas",
                    "Páginas web institucionales",
                    "Portales de contenido"
                ]}
            />   

            <ItemSolutions 
                title = "Aplicaciones Mobile" 
            //    img= "https://www.thesandbox.com.ar/assets/images/services/digital-transformation.webp" 
                img= {mobile} 
                text="Generamos productos digitales co-creados con tu equipo."
                arrayText={[ 
                    "Micrositios",
                    "Apps",
                    "Landing pages para campañas",
                    "Páginas web institucionales",
                    "Portales de contenido"
                ]}
            />  

            <ItemSolutions 
                title = "Integraciones" 
                img= "https://www.thesandbox.com.ar/assets/images/services/digital-transformation.webp" 
                text="Generamos productos digitales co-creados con tu equipo."
                arrayText={[ 
                    "Micrositios",
                    "Apps",
                    "Landing pages para campañas",
                    "Páginas web institucionales",
                    "Portales de contenido"
                ]}
            />  
     
            <ItemSolutions 
                title = "Resource Outsourcing" 
                img= "https://www.thesandbox.com.ar/assets/images/services/digital-transformation.webp" 
                text="Generamos productos digitales co-creados con tu equipo."
                arrayText={[ 
                    "Micrositios",
                    "Apps",
                    "Landing pages para campañas",
                    "Páginas web institucionales",
                    "Portales de contenido"
                ]}
            />              
         
        </div>         
    </section>
  );
}

export default Solutions;
