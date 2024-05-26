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
            <li className='liBenefit mb-5'> EL RITUAL ES ESA FORMACIÓN CREADA PARA TI, POR DEPORTISTAS QUE HAN SUFRIDO MENTALMENTE IGUAL QUE TÚ. 
            EN SU INTERIOR ENCONTRARÁS 3 TÉCNICAS DE VISUALIZACIÓN Y MEDITACIÓN QUE TE AYUDARÁN A:</li>
            <li className='liBenefit'>ESTAR MÁS CONCENTRADO</li>
            <hr class="hr" />
            <li className='liBenefit'>DESCONECTAR DEL RUIDO INNECESARIO DENTRO DE TU CABEZA</li>
            <hr class="hr" />
            <li className='liBenefit'>TRANSFORMAR TUS MIEDOS DUDAS E INNSEGURIDADES EN ENERGIA POSITIVA</li>
            <hr class="hr" />
            <li className="liBenefit">
            CONSEGUIR ESA RELAJACIÓN FÍSICA Y MENTAL EN LA COMPETICIÓN QUE TE PERMITA HACER LO QUE TAN BIEN HACÍAS EN LOS ENTRENAMIENTOS
            </li>
            <hr class="hr" />
            <li className="liBenefit">
              Y SOBRE TODO COMENZAR A CONOCERTE MEJOR, MÁS ALLÁ DE OBJETIVOS Y METAS DEPORTIVAS
            </li>
            <hr class="hr" />
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
