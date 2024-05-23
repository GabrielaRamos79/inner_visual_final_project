import React from 'react';
import benefit1 from '../../assets/img/benefit1.jpg';
import benefit2 from '../../assets/img/benefit2.jpg';
import benefit3 from '../../assets/img/benefit3.jpeg';
import benefit4 from '../../assets/img/benefit4.jpeg';
import './benefit.css'

const Benefit = () => {
  return (
  <div className='benefitcontainer'>
    <h2 className='titleBenefit'>BENEFICIOS</h2>
    <section className='sectionBenefit'>

    <div className='textBenefit'>
    <ul>
      <li className='liBenefit'>Lorem ipsum dolor, excepturi eos iusto at animi sint eius, ratione ipsam accusamus blanditiis, neque voluptate.
      reprehenderit aut perferendis officiis.</li>
      <li className='liBenefit'>Lorem ipsum dolor, Lorem, ipsum. Excepturi eos iusto at animi sint eius, ratione ipsam accusamus blanditiis, neque voluptate.
      reprehenderit aut perferendis officiis.</li>
      <li className='liBenefit'>Lorem ipsum dolor, excepturi eos iusto at animi sint eius, ratione ipsam accusamus blanditiis, neque voluptate.
      reprehenderit aut perferendis officiis.</li>
    </ul>
    </div>
  
    <div>
    <img className='benefit1' src={benefit1} alt="mujeres terminando en clase de yoga " />
    <img className='benefit2' src={benefit2} alt="persona mayor despues de hacer ejercicio" />
    <img className='benefit3' src={benefit3} alt="mujer haciendo yoga en la montaña" />
    <img className='benefit4' src={benefit4} alt="jugador de baloncesto saltando" />
    </div>


    </section>
  </div>
  )
}

export default Benefit
