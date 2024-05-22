import React from 'react'
import NavbarCustom from './../../components/navbarCustom/NavbarCustom';
import Unauthorized from './../../components/unauthorized/Unauthorized';
import FooterCustom from './../../components/footerCustom/FooterCustom';

const ErrorPage = () => {
  return (
    <>
        <NavbarCustom />
        <Unauthorized />
        <FooterCustom />
    </>
  )
}

export default ErrorPage
