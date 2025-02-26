import React, { useState, useEffect } from 'react';
import './Opinions.css';

const Opinions = () => {
  const [services, setServices] = useState([]);
  const [serviceName, setServiceName] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  // Cargar servicios desde localStorage
  useEffect(() => {
    const storedServices = JSON.parse(localStorage.getItem('services')) || [];
    setServices(storedServices);
  }, []);

  // Guardar servicios en localStorage
  const saveServices = (services) => {
    localStorage.setItem('services', JSON.stringify(services));
  };

  // Agregar o editar un servicio
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedServices = services.map((service) =>
        service.id === currentId ? { ...service, name: serviceName } : service
      );
      setServices(updatedServices);
      saveServices(updatedServices);
      setIsEditing(false);
    } else {
      const newService = { id: Date.now(), name: serviceName };
      const updatedServices = [...services, newService];
      setServices(updatedServices);
      saveServices(updatedServices);
    }
    setServiceName('');
  };

  // Eliminar un servicio
  const handleDelete = (id) => {
    const updatedServices = services.filter((service) => service.id !== id);
    setServices(updatedServices);
    saveServices(updatedServices);
  };

  // Editar un servicio
  const handleEdit = (service) => {
    setIsEditing(true);
    setServiceName(service.name);
    setCurrentId(service.id);
  };

  return (
    <div className='services'>
      <h2>Añade Tus Opiniones</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
          placeholder='Escribir Opiniones'
          required
        />
        <button type='submit'>{isEditing ? 'Actualizar' : 'Agregar'}</button>
      </form>

      <ul>
        {services.map((service) => (
          <li key={service.id}>
            {service.name}
            <button type='button' onClick={() => handleEdit(service)}>
              Editar
            </button>
            <button type='button' onClick={() => handleDelete(service.id)}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Opinions;
