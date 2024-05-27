import { Outlet } from 'react-router-dom'
import NavbarCustom from '../components/navbarCustom/NavbarCustom'
import FooterCustom from '../components/footerCustom/FooterCustom'

const LayoutPublic = () => {
  return (
    <>
      <NavbarCustom />
      <Outlet />
      <FooterCustom />
    </>
  )
}

export default LayoutPublic
