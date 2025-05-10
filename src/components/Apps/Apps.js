import React from 'react';
import AppCard from './AppCard';
import '../../styles/Apps.css';
import { motion } from 'framer-motion';

function Apps() {
  const apps = [
    {
      title: 'App de Reservas',
      img: 'https://s3.us-east-2.amazonaws.com/mgpanel/403-representaciones-experiencia-usuario-diseno-interfaz.jpg',
      text: 'Sistema para gestionar reservas y disponibilidad en tiempo real.',
    },
    {
      title: 'App de Fitness',
      img: 'https://img.freepik.com/vector-gratis/banner-desarrollo-aplicaciones_33099-1720.jpg?semt=ais_hybrid&w=740',
      text: 'Aplicación de rutinas, seguimiento de progreso y desafíos.',
    },
    {
      title: 'App de Clima',
      img: 'https://img.freepik.com/foto-gratis/representaciones-experiencia-usuario-diseno-interfaz_23-2150104509.jpg?ga=GA1.1.169197955.1746740375&semt=ais_hybrid&w=740',
      text: 'Consulta del clima actual y pronóstico extendido con geolocalización.',
    },
    {
      title: 'App de Recetas',
      img: 'https://img.freepik.com/fotos-premium/concepto-gestion-documentos-iconos-pantalla-virtual-sistema-gestion-documentacion-dms-documento-linea_154034-553.jpg?ga=GA1.1.169197955.1746740375&semt=ais_hybrid&w=740',
      text: 'Encuentra y comparte recetas con pasos guiados y videos.',
    },
  ];

  return (
    <section id="apps" className="apps-section bg-black text-white pt-5 pb-10 scroll-mt-32">
      <div className="text-center mb-10">
        <motion.h2
          className="text-4xl font-bold text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Apps
        </motion.h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6 px-6">
        {apps.map((app, index) => (
          <AppCard key={index} app={app} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Apps;
