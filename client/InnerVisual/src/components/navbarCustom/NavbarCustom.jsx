import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoDefault from '../../assets/img/logo.svg';
import logoAdmin from '../../assets/img/Logo_Orange.png';
import logoCursos from '../../assets/img/Logo_Orange.png';
import logoClient from '../../assets/img/Logo_Orange.png';
import logoLogin from '../../assets/img/Logo_Orange.png';
import './navbarCustom.css';
import { UserContext } from '../../context/AuthContext';

function NavbarCustom() {
  const { isLoggedIn, logout, user } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // useEffect(() => {
  //   handleLogout();
  // }, []);

  useEffect(() => {
    setIsLoginPage(location.pathname === '/login');
  }, [location.pathname]);

  const getDashboardLink = () => {
    if (user?.role === 'admin') {
      return "/admin/dashboard";
    } else if (user?.role === 'client') {
      return "/client/dashboard";
    }
    return "/";
  };

  const getLinkClass = () => {
    switch (location.pathname) {
      case '/cursos':
      case '/client':
      case '/login':
      case '/admin':
        return 'orange-links';
      default:
        return '';
    }
  };

  const getLogoSrc = () => {
    switch (location.pathname) {
      case '/cursos':
        return logoCursos;
      case '/client':
        return logoClient;
      case '/login':
        return logoLogin;
      case '/admin':
          return logoAdmin;  
      default:
        return logoDefault;
    }
  };

  return (
    <>
      <nav className={`navbar ${menuOpen ? 'menuOpen' : ''}`}>
        <div className="burger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className="overlay" onClick={toggleMenu}></div>

        <figure>
          <img className="link" id="logo" src={getLogoSrc()} alt="logo Inner Visuals" />
        </figure>

        <div className="iconHolder">
          <Link to="/" className={`nav-link-custom ${getLinkClass()}`}>
            <h3 className={`links closeactive ${getLinkClass()}`}>home</h3>
          </Link>

          <Link to="/about" className={`nav-link-custom ${getLinkClass()}`}>
            <div className="aboutLink">
              <h3 className={`links closeactive ${getLinkClass()}`}>about</h3>
            </div>
          </Link>

          <Link to="/cursos" className={`nav-link-custom ${getLinkClass()}`}>
            <div className="cursosLink">
              <h3 className={`links closeactive ${getLinkClass()}`}>cursos</h3>
            </div>
          </Link>

          {isLoggedIn && (user?.role === 'admin' || user?.role === 'client') && (
            <Link to={getDashboardLink()} className={`nav-link-custom ${getLinkClass()}`}>
              <div className="areaLink">
                <h3 className={`links closeactive ${getLinkClass()}`}>área privada</h3>
              </div>
            </Link>
          )}

          {isLoggedIn ? (
            <div className={`nav-link-custom ${getLinkClass()}`} onClick={handleLogout}>
              <div className="logoutLink">
                <h3 className={`links closeactive ${getLinkClass()}`}>logout</h3>
              </div>
            </div>
          ) : (
            <Link to="/login" className={`nav-link-custom ${getLinkClass()}`}>
              <div className="loginLink">
                <h3 className={`links closeactive ${getLinkClass()}`}>login</h3>
              </div>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavbarCustom;
