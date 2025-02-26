// src/components/FAQ.jsx
import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: '¿Cómo solicito un servicio?',
    answer:
      'Solo necesitas abrir la app, seleccionar el servicio y confirmar tu ubicación.',
  },
  {
    question: '¿Cuánto tiempo tarda en llegar el servicio?',
    answer:
      'Dependiendo de la ubicación, generalmente llegamos en menos de 30 minutos.',
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer:
      'Aceptamos tarjetas de crédito, débito y pagos digitales como PayPal.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleKeyPress = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleFAQ(index);
    }
  };

  return (
    <section id='faq' className='faq'>
      <h2>Preguntas Frecuentes</h2>
      <div className='faq-list'>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
            onKeyDown={(event) => handleKeyPress(event, index)}
            tabIndex={0} // Makes the div focusable
            role='button' // Announces it as a button for screen readers
            aria-expanded={activeIndex === index} // Improves accessibility
          >
            <h3>{faq.question}</h3>
            <p className='faq-answer'>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
