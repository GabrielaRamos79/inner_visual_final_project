import './history.css'
import Carousel from 'react-bootstrap/Carousel';
import history from '../../assets/img/history.jpg';
import history2 from '../../assets/img/history2.png';
import history3 from '../../assets/img/history3.jpg';

const History = () => {
  return (
    <>
    <p>Historia</p>
    <UncontrolledExample />
    </>
  )
}

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='history' src={history} alt='Terapeuta con niña paciente' />
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Carousel.Caption>
          <h3>Nos importa tu salud</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='history2' src={history2} alt='Terapeuta ayudando a mujer' />
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          <h3>Tratamiento individual</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='history3' src={history3} alt='Terapeuta haciendo ejercicio de rehabilitacion' />
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3>Estamos para atenderte</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default History;