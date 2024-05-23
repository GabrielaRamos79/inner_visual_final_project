import React from 'react';
import gallery from '../../assets/img/gallery (1).png'
import './benefit.css'

const Benefit = () => {
  return (
  <div className='benefitcontainer'>
    <section className='sectionBenefit'>
      <div className='textContainer'>
        <h2 className='titleBenefit'>BENEFICIOS</h2>
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
      </div>
      <div className='imageContainer'>
        <img src={gallery} alt='gallery' className='imgBenefit' />
      </div>
    </section>
  </div>
  );
};

export default Benefit
