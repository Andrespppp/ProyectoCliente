// src/components/Gallery.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Gallery.css';

const images = [
  { src: '/images/pinchazo.jpg', alt: 'Reparación de pinchazos' },
  { src: '/images/limpieza.jpg', alt: 'Limpieza de coche' },
  { src: '/images/repostaje.jpg', alt: 'Repostaje de combustible' },
];

const Gallery = () => {
  return (
    <section id='gallery' className='gallery'>
      <h2>Nuestros Servicios</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className='slide-content'>
              <img src={image.src} alt={image.alt} />
              <p>{image.alt}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
