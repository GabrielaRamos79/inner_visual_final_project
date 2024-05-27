import React from 'react';
import gallery from '../../assets/img/gallery (1).png'
import './benefit.css'

const Benefit = () => {
  return (
    <div className='benefitcontainer'>
      <section className='sectionBenefit'>
        <div className='textContainer mt-5'>
          <h2 className='titleBenefit mb-5'>BENEFICIOS</h2>
          <div className='textBenefit '>
            <ul>
              <p className='mb-5'> EL RITUAL ES ESA FORMACIÓN CREADA PARA TI, POR DEPORTISTAS QUE HAN SUFRIDO MENTALMENTE IGUAL QUE TÚ.
                EN SU INTERIOR ENCONTRARÁS 3 TÉCNICAS DE VISUALIZACIÓN Y MEDITACIÓN QUE TE AYUDARÁN A:</p>
              <p>ESTAR MÁS CONCENTRADO</p>
              <hr className="hr" />
              <p>DESCONECTAR DEL RUIDO INNECESARIO DENTRO DE TU CABEZA</p>
              <hr className="hr" />
              <p>TRANSFORMAR TUS MIEDOS DUDAS E INSEGURIDADES EN ENERGIA POSITIVA</p>
              <hr className="hr" />
              <p>
                CONSEGUIR ESA RELAJACIÓN FÍSICA Y MENTAL EN LA COMPETICIÓN QUE TE PERMITA HACER LO QUE TAN BIEN HACÍAS EN LOS ENTRENAMIENTOS
              </p>
              <hr className="hr" />
              <p>
                Y SOBRE TODO COMENZAR A CONOCERTE MEJOR, MÁS ALLÁ DE OBJETIVOS Y METAS DEPORTIVAS
              </p>
              <hr className="hr" />
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
