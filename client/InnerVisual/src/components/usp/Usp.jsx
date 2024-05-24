import React from 'react';
import innerphoto from '../../assets/img/swimming_guy.png';
import innerphoto2 from '../../assets/img/biker_guy.png';
import './usp.css'

const Usp = () => {
  return (
    <>
      <h1 className='UspTitle' >EL PROYECTO</h1>

      <section className='uspSection'>
        <div className="uspSection1">


          <div className="uspSection1_pic">
            <div className='layoutgray1'><img className='photo1' src={innerphoto} alt="swimming guy" /></div>
          </div>



          <div className='uspSection1_text'>
            <h2 className='titleUsp1'>¿EN QUÉ CONSISTE?</h2>
            <p className='textUsp1'>Lorem ipsum dolor vvvvvvvmet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>


        <div className="uspSection2">
          <div className='uspSection2_text'>
            <h2 className='titleUsp2'>¿QUÉ BENEFICIOS APORTA A MI PRÁCTICA DEPORTIVA?</h2>
            <p className='textUsp2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          <div className="uspSection2_pic">
            <div className='layoutgray2'><img className='photo2' src={innerphoto2} alt="jumping biker" />
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Usp
