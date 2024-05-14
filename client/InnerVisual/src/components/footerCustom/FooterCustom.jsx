import './footerCustom.css'
import facebook from '../../assets/img/icons/facebook.png'
import instagram from '../../assets/img/icons/instagram.png'
import linkedin from '../../assets/img/icons/linkedin.png'

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
