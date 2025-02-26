// src/components/Features.jsx
//import React from 'react';
import './Features.css'; // Importa los estilos específicos para la sección

const Features = () => {
  const features = [
    {
      title: 'Reparación de Pinchazos',
      description:
        'Servicios rápidos y efectivos para reparar pinchazos de ruedas a domicilio.',
    },
    {
      title: 'Limpieza de Coche',
      description: 'Limpieza a fondo de tu vehículo sin salir de casa.',
    },
    {
      title: 'Repostaje',
      description:
        'Repostaje de combustible en la comodidad de tu hogar o trabajo.',
    },
  ];

  return (
    <section id='features' className='features'>
      <h2>Características</h2>
      <div className='features-list'>
        {features.map((feature, index) => (
          <div key={index} className='feature-item'>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features; // Exporta el componente
