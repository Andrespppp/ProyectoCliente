// src/components/Footer.jsx
//import React from 'react';
import './Footer.css'; // Creamos un archivo CSS para los estilos

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <h2>CarServices</h2>
        <p>
          Ofrecemos servicios de reparación de coches, limpieza y repostaje a
          domicilio.
        </p>

        <div className='contact-info'>
          <h3>Contacto</h3>
          <p>Email: contacto@carservices.com</p>
          <p>Teléfono: +123 456 7890</p>
          <p>Dirección: Calle Ejemplo 123, Ciudad, País</p>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>
          &copy; {new Date().getFullYear()} CarServices. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
