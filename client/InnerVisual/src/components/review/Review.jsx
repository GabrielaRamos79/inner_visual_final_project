import React from 'react';
import './review.css'
import review1 from '../../assets/img/review1.jpg';
import review2 from '../../assets/img/review2.jpg';
import review3 from '../../assets/img/review3.jpg';
import review4 from '../../assets/img/review4.jpg'
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
                <h3 className='cardName'>Aitor</h3>
                <h3 className='cardSurname'>Martínez</h3>
                <p className='cardP'>En el último simulacro de competición que hice con la selección quedé primero en las prueba de boulder, y uno de los pocos en hacer las vías más duras. Siento una mejora en la concentración, precisión y técnica</p>
                <img className='review1' src={review1} alt="hombre moreno con barba" />
              </div>

              <div className='card2Review'>
                <h3 className='cardName'>Fran</h3>
                <h3 className='cardSurname'>Quesada</h3>
                <p className='cardP'>La apnea es un deporte con un componente mental crucial. Gracias a inner visuals, he aprendido a controlar mis nervios, batiendo mi récord de profundidad y tres récords nacionales. Además, ahora disfruto de las competiciones.</p>
                <img className='review2' src={review2} alt="hombre sonriente pelo rizado" />
              </div>

              <div className='card3Review'>
                <h3 className='cardName'>Bárbara</h3>
                <h3 className='cardSurname'>Bergbauer</h3>
                <p className='cardP'>Noté una enorme diferencia en mi capacidad para estar presente y no dejar que la frustración o el cansancio me superaran en momentos clave. Seguiré trabajando esta parte de mí misma y estoy seguro de que lograré mejores resultados.</p>
                <img className='review3' src={review3} alt="mujer sonriente pelirroja" />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className='cardsReview'>
              <div className='card4Review'>
                <h3 className='cardName'>Gabriela</h3>
                <h3 className='cardSurname'>Ramos</h3>
                <p className='cardP'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis at officiis quos dolorem debitis quam aliquid voluptas es sint"</p>
                <img className='review4' src={review4} alt="mujer con gafas pasta negra, pelo largo liso" />
              </div>

              <div className='card5Review'>
                <h3 className='cardName'>ana</h3>
                <h3 className='cardSurname'>lucena</h3>
                <p className='cardP'>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis at officiis quos dolorem debitis quam aliquid voluptas es sint"</p>
                <img className='review5' src={review5} alt="mujer sonriente moño recogido" />
              </div>

              <div className='card6Review'>
                <h3 className='cardName'>Gonzalo</h3>
                <h3 className='cardSurname'>Parra</h3>
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