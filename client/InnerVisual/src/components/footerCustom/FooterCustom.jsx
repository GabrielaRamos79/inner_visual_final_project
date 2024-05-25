import React from 'react';
import { Link } from 'react-router-dom';
import './footerCustom.css';
import facebook from '../../assets/img/icons/facebook.svg';
import instagram from '../../assets/img/icons/instagram.svg';
import linkedin from '../../assets/img/icons/linkedin.svg';
import whatsapp from '../../assets/img/icons/whatsapp.svg';
import logoFooter from '../../assets/img/logoFooter.svg';

const FooterCustom = () => {
  return (
    <>
      <footer className='footer'>
        <div>
          <img className='imgLogo' src={logoFooter} alt="logo InnerVisual" />
        </div>

        <div className='groupFooter'>
          <div className='navFooter'>
            <div className="var">
              <div className="vr"></div>
            </div>
            <div className='leftFooter'>
              <Link to="/" className='homeFooter'>Home</Link>
              <Link to="/about" className='aboutFooter'>About us</Link>
              <Link to="/#contact" className='contactFooter'>Contacto</Link> 
            </div>
          </div>
          <div className='textFooter'>
            <div className="var">
              <div className="vr"></div>
            </div>
            <div className='rightFooter'>
              <p className='politicFooter'>Política de privacidad</p>
              <p className='cookiesFooter'>Política de cookies</p>
              <p className='legalFooter'>Aviso legal</p>
            </div>
          </div>
        </div>

        <div className='redesFooter'>
          <div className='group1'>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img className='imgFooter' src={facebook} alt="logo de facebook" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img className='imgFooter' src={instagram} alt="logo de instagram" />
            </a>
          </div>
          <div className='group2'>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img className='imgFooter' src={linkedin} alt="logo de linkedin" />
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
              <img className='imgFooter' src={whatsapp} alt="logo de whatsapp" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterCustom;
