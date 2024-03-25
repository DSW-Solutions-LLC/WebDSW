  
import React from 'react';
import '../styles/Solutions.css' 
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
                title = "Digital Transformation" 
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
                title = "Digital Factory" 
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
                title = "Digital Business Growth" 
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
