import React from 'react';
import './review.css'
import review1 from '../../assets/img/review1.jpg';
import review2 from '../../assets/img/review2.jpg';
import review3 from '../../assets/img/review3.jpg';
import review4 from '../../assets/img/review4.jpg';
import review5 from '../../assets/img/review5.jpg';
import review6 from '../../assets/img/review6.jpg';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Review = () => {

  return (
    <>
      <section className='reviewSection'>
        <h2 className='titleReview'>reseñas</h2>
        <Carousel>
          <Carousel.Item>
            <div className='cardsReview'>
              <div className='card1Review'>
                <h2 className='cardName'>Lucía</h2>
                <h2 className='cardSurname'>Lucena</h2>
                <p className='cardP'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis at officiis quos dolorem debitis quam aliquid voluptas es sint"</p>
                <img className='review1' src={review1} alt="mujer sonriente moño recogido" />
              </div>

              <div className='card2Review'>
                <h2 className='cardName'>Raúl</h2>
                <h2 className='cardSurname'>González</h2>
                <p className='cardP'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis at officiis quos dolorem debitis quam aliquid voluptas es sint"</p>
                <img className='review2' src={review2} alt="hombre sonriente pelo rizado" />
              </div>

              <div className='card3Review'>
                <h2 className='cardName'>Ana</h2>
                <h2 className='cardSurname'>Hernández</h2>
                <p className='cardP'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis at officiis quos dolorem debitis quam aliquid voluptas es sint"</p>
                <img className='review3' src={review3} alt="mujer sonriente pelirroja" />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className='cardsReview'>
              <div className='card4Review'>
                <h2 className='cardName'>Gabriela</h2>
                <h2 className='cardSurname'>Ramos</h2>
                <p className='cardP'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis at officiis quos dolorem debitis quam aliquid voluptas es sint"</p>
                <img className='review4' src={review4} alt="mujer con gafas pasta negra, pelo largo liso" />
              </div>

              <div className='card5Review'>
                <h2 className='cardName'>Javier</h2>
                <h2 className='cardSurname'>Escudero</h2>
                <p className='cardP'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis at officiis quos dolorem debitis quam aliquid voluptas es sint"</p>
                <img className='review5' src={review5} alt="hombre moreno con barba" />
              </div>

              <div className='card6Review'>
                <h2 className='cardName'>Gonzalo</h2>
                <h2 className='cardSurname'>Parra</h2>
                <p className='cardP'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis at officiis quos dolorem debitis quam aliquid voluptas es sint"</p>
                <img className='review6' src={review6} alt="hombre sonriente barbudo pelirrojo" />
              </div>
            </div>
          </Carousel.Item>
          
        </Carousel>
      </section>
    </>
  );
};

export default Review
