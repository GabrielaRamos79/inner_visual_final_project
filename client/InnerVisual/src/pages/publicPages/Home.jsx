import Hero from './../../components/hero/Hero';
import Review from './../../components/review/Review';
import Benefit from './../../components/benefit/Benefit';
import Contact from './../../components/contact/Contact';
import Usp from '../../components/usp/Usp';

const Home = () => {
  return (
    <>
      <Hero />
      <Usp />
      <Review />
      <Benefit />
      <div id="contact">
        <Contact />
      </div>
    </>
  )
}

export default Home;
