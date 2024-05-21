import React from 'react';
import './review.css'
import review1 from '../../assets/img/review1.jpg';
import review2 from '../../assets/img/review2.jpg';
import review3 from '../../assets/img/review3.jpg';
import review4 from '../../assets/img/review4.jpg';
import review5 from '../../assets/img/review5.jpg';
import review6 from '../../assets/img/review6.jpg';
import { Carousel } from 'react-bootstrap';
import Rating from 'react-rating-stars-component';
import 'bootstrap/dist/css/bootstrap.min.css';


const Review = () => {

  return (
    <>
      <section className='reviewSection'>
        <h2 className='titleReview'>Dicen de nosotros</h2>
        <Carousel>
          <Carousel.Item>
            <div className='cardsReview'>
              <div className='card1Review'>
                <img className='review1' src={review1} alt="mujer sonriente moño recogido" />
                <h2 className='cardsName'>Lucia Gil</h2>
                <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis at officiis quos dolorem debitis quam aliquid voluptas es sint"</p>
                <Rating
                  count={5}
                  size={24}
                  value={4}
                  activeColor="#ffd700"
                  inactiveColor="#ddd"
                  edit={false}
                />
              </div>

              <div className='card2Review'>
                <img className='review2' src={review2} alt="hombre sonriente pelo rizado" />
                <h2 className='cardsName'>Raúl González</h2>
                <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis at officiis quos dolorem debitis quam aliquid voluptas es sint"</p>
                <Rating
                  count={5}
                  size={24}
                  value={4}
                  activeColor="#ffd700"
                  inactiveColor="#ddd"
                  edit={false}
                />
              </div>

              <div className='card3Review'>
                <img className='review3' src={review3} alt="mujer sonriente pelirroja" />
                <h2 className='cardsName'>María Hernández</h2>
                <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis at officiis quos dolorem debitis quam aliquid voluptas es sint"</p>
                <Rating
                  count={5}
                  size={24}
                  value={5}
                  activeColor="#ffd700"
                  inactiveColor="#ddd"
                  edit={false}
                />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className='cardsReview'>
              <div className='card4Review'>
                <img className='review4' src={review4} alt="mujer con gafas pasta negra, pelo largo liso" />
                <h2 className='cardsName'>Gabriela Ramos</h2>
                <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis at officiis quos dolorem debitis quam aliquid voluptas es sint"</p>
                <Rating className='rating'
                count={5}
                size={24}
                value={5}
                activeColor="#ffd700"
                inactiveColor="#ddd"
                edit={false}
              />
              </div>

              <div className='card5Review'>
                <img className='review5' src={review5} alt="hombre moreno con barba" />
                <h2 className='cardsName'>Javier Escudero</h2>
                <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis at officiis quos dolorem debitis quam aliquid voluptas es sint"</p>
                <Rating className='rating'
                count={5}
                size={24}
                value={5}
                activeColor="#ffd700"
                inactiveColor="#ddd"
                edit={false}
              />
              </div>

              <div className='card6Review'>
                <img className='review6' src={review6} alt="hombre sonriente barbudo pelirrojo" />
                <h2 className='cardsName'>Gonzalo Parra</h2>
                <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis at officiis quos dolorem debitis quam aliquid voluptas es sint"</p>
                <Rating className='rating'
                count={5}
                size={24}
                value={4}
                activeColor="#ffd700"
                inactiveColor="#ddd"
                edit={false}
              />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default Review
