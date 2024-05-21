import React from 'react';
import benefit1 from '../../assets/img/benefit1.jpg';
import benefit2 from '../../assets/img/benefit2.jpg';
import './benefit.css'

const Benefit = () => {
  return (
    <>
    <h2 className='titleBenefit'>Beneficios</h2>
    <section className='sectionBenefit'>
  
    <div>
    <img className='benefit1' src={benefit1} alt="mujer sonriente moño recogido" />
    <img className='benefit2' src={benefit2} alt="mujer sonriente moño recogido" />
    </div>

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
    </section>
    </>
  )
}

export default Benefit
