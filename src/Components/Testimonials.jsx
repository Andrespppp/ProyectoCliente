// src/components/Testimonials.jsx
//import React from 'react';
import './Testimonials.css'; // Importa los estilos

const testimonials = [
  {
    name: 'Carlos Rodríguez',
    feedback:
      'Servicio excelente. Me arreglaron un pinchazo en minutos y sin moverme de casa.',
  },
  {
    name: 'Laura Méndez',
    feedback:
      'Me encanta la comodidad de que me laven el coche mientras trabajo. ¡Súper recomendado!',
  },
  {
    name: 'David Pérez',
    feedback:
      'Pedí un repostaje a domicilio y llegó justo a tiempo. Muy buen servicio.',
  },
];

const Testimonials = () => {
  return (
    <section id='testimonials' className='testimonials'>
      <h2>Testimonios</h2>
      <div className='testimonials-list'>
        {testimonials.map((testimonial, index) => (
          <div key={index} className='testimonial-item'>
            <p>"{testimonial.feedback}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
