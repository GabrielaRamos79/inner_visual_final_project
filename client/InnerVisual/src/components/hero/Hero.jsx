import React from 'react';
import { Link } from 'react-router-dom';
import './hero.css';

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <h2 className='titleHero1'>Entrena tu mente </h2>
        <h1 className='titleHero'>Marca la diferencia</h1>
        <Link to="/about" className='buttonHero'>Conócenos</Link>

      </section>
    </>
  );
};

export default Hero;


