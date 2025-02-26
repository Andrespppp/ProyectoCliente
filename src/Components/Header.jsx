import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom

export default function HeaderComponent() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`fixed top-0 left-0 w-full p-4 transition-all duration-300 z-50 ${
        scrolling ? 'backdrop-blur-md bg-white/30 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-gray-900'>CarFix</h1>
        <nav>
          <ul className='flex text-gray-800'>
            <li className='mr-10'>
              <Link to='/' className='hover:text-blue-600'>
                {' '}
                Características
              </Link>
            </li>
            <li className='mr-10'>
              <Link to='/pricing' className='hover:text-blue-600'>
                {' '}
                Precios
              </Link>
            </li>
            <li>
              <Link to='/contact' className='hover:text-blue-600'>
                {' '}
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
        <Link
          to='#download'
          className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition'
        >
          Descarga la App
        </Link>
      </div>
    </motion.header>
  );
}
