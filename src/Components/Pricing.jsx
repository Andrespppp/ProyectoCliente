// src/components/Pricing.jsx
import React from 'react';
import './Pricing.css';

const plans = [
  {
    name: 'Básico',
    price: '9.99€',
    features: ['1 servicio al mes', 'Soporte 24/7', 'Cobertura en ciudad'],
  },
  {
    name: 'Estándar',
    price: '19.99€',
    features: [
      '3 servicios al mes',
      'Soporte prioritario',
      'Cobertura nacional',
    ],
  },
  {
    name: 'Premium',
    price: '29.99€',
    features: [
      'Servicios ilimitados',
      'Atención VIP',
      'Cobertura internacional',
    ],
  },
];

const Pricing = () => {
  return (
    <section id='pricing' className='pricing'>
      <h2>Planes de Precios</h2>
      <div className='pricing-container'>
        {plans.map((plan, index) => (
          <div key={index} className='pricing-card'>
            <h3>{plan.name}</h3>
            <p className='price'>{plan.price}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button>Suscribirse</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
