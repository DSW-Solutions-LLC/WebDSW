import React from 'react';
import '../styles/Solutions.css';
import ItemSolutions from './ItemSolutions';

function Solutions() {
  return (
    <section id="solutions" className="services scroll-mt-32">
      <div className="solutions-header text-center">
        <h2 className="text-title">Soluciones</h2>
      </div>
      <div className="row overflow-visible">
        <ItemSolutions
          title="Automatizaciones"
          img="https://jaemsolucionesinformaticas.com/wp-content/uploads/2024/05/Sistemas-y-Redes.webp"
          text="Generamos productos digitales co-creados con tu equipo."
          arrayText={[
            "Micrositios",
            "Apps",
            "Landing pages para campañas",
            "Páginas web institucionales",
            "Portales de contenido",
          ]}
        />

        <ItemSolutions
          title="Aplicaciones Mobile"
          img="https://www.siadv.com/wp-content/uploads/2019/07/mejores-soluciones-informaticas.jpg"
          text="Generamos productos digitales co-creados con tu equipo."
          arrayText={[
            "Micrositios",
            "Apps",
            "Landing pages para campañas",
            "Páginas web institucionales",
            "Portales de contenido",
          ]}
        />

        <ItemSolutions
          title="Integraciones"
          img="https://www.easyappcode.com/images/page-soluciones-informaticos-para-empresas.jpg"
          text="Generamos productos digitales co-creados con tu equipo."
          arrayText={[
            "Micrositios",
            "Apps",
            "Landing pages para campañas",
            "Páginas web institucionales",
            "Portales de contenido",
          ]}
        />

        <ItemSolutions
          title="Resource Outsourcing"
          img="https://www.inter-fax.net/wp-content/uploads/2022/03/infor3.png"
          text="Generamos productos digitales co-creados con tu equipo."
          arrayText={[
            "Micrositios",
            "Apps",
            "Landing pages para campañas",
            "Páginas web institucionales",
            "Portales de contenido",
          ]}
        />
      </div>
    </section>
  );
}

export default Solutions;
