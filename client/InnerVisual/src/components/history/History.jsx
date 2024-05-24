import React from 'react';
import './history.css'
import Carousel from 'react-bootstrap/Carousel';
import history from '../../assets/img/history.jpg'
import history2 from '../../assets/img/history2.png';
import history3 from '../../assets/img/history3.jpg';

const History = () => {
  return (
    <>
    <section className='componenthistory'>
      <Carousel>
      <Carousel.Item>
        <img className='history' src={history} alt='Deportista haciendo plancha lateral' />
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Carousel.Caption>
          <h2 className='caption-title1'>Breve</h2>
          <h3 className='caption-title2'>Historia</h3>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='history3' src={history2} alt='Nadador' />
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          <h2 className='caption-title1'>Tratamiento</h2>
          <h3 className='caption-title2'>Individual</h3>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='history2' src={history3} alt='Hombre haciendo Motocross' />
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h2 className='caption-title3'>Si quieres cambiar</h2>
          <h3 className='caption-title4'>hazlo desde dentro</h3>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
    </>
  )
}

export default History;