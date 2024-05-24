import React from 'react'
import './footerCustom.css'
import facebook from '../../assets/img/icons/facebooklogo.svg'
import instagram from '../../assets/img/icons/instagramlogo.svg'
import linkedin from '../../assets/img/icons/linkedinlogo.svg'
import whatsapp from '../../assets/img/icons/whatsapplogo.svg'

const FooterCustom = () => {
  return (
    <>
      <footer className='footer'>
        <div className='redesFooter'>
          <a href="https://www.facebook.com" target="_blank">
            <img className='imgFooter' src={facebook} alt="logo de facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img className='imgFooter' src={instagram} alt="logo de instagram" />
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <img className='imgFooter' src={linkedin} alt="logo de linkedin" />
          </a>
          <a href="https://www.whatsapp.com" target="_blank">
            <img className='imgWhatsapp' src={whatsapp} alt="logo de whatsapp" />
          </a>
        </div>

        <div className='textFooter'>
          <p className='copy'>Inner Visuals Copyright ©2024 | Todos los derechos reservados</p>
          <p className='politic'>Aviso Legal - Política de Cookies - Política de Privacidad</p>
        </div>
      </footer>
    </>
  )
}

export default FooterCustom
