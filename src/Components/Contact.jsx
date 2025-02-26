import React from 'react';
import './Contact.css'; // Asegúrate de crear este archivo para los estilos

export default function ContactComponent() {
  return (
    <section id='contact' className='contact'>
      <h2>Contacto</h2>
      <p>Si tienes preguntas o comentarios, no dudes en contactarnos.</p>
      <form className='contact-form'>
        <div className='form-group'>
          <label htmlFor='name'>Nombre:</label>
          <input type='text' id='name' required />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Correo Electrónico:</label>
          <input type='email' id='email' required />
        </div>
        <div className='form-group'>
          <label htmlFor='message'>Mensaje:</label>
          <textarea id='message' rows='4' required></textarea>
        </div>
        <button type='submit'>Enviar</button>
      </form>
    </section>
  );
}
