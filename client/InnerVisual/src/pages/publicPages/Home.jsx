import Hero from './../../components/hero/Hero';
import Review from './../../components/review/Review';
import Plan from './../../components/plan/Plan';
import Benefit from './../../components/benefit/Benefit';
import Contact from './../../components/contact/Contact';
import Usp from '../../components/usp/Usp';

const Home = () => {
  return (
    <>
    <Hero />
    <Usp />
    <Review />
    <Plan  />
    <Benefit />
    <Contact />
    </>
  )
}

export default Home
