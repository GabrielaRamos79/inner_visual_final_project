import React, { useState, useEffect, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
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

  return (
    <>
      <nav className={`navbar ${menuOpen ? 'menuOpen' : ''}`}>
        <div className="burger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div className="overlay" onClick={toggleMenu}></div>

        <Link to="/">
          <img className="link" id="logo" src={logo} alt="logo Inner Visuals" />
        </Link>

        <div className="iconHolder">
          <Link to="/" className="nav-link-custom">
            <h3 className='links closeactive'>home</h3>
          </Link>

          <Link to="/about" className="nav-link-custom">
            <div className="aboutLink">
              <h3 className='links closeactive'>about</h3>
            </div>
          </Link>

          <Link to="/cursos" className="nav-link-custom">
            <div className="cursosLink">
              <h3 className='links closeactive'>cursos</h3>
            </div>
          </Link>

          {isLoggedIn && (user?.role === 'admin' || user?.role === 'client') && (
            <Link to={getDashboardLink()} className="nav-link-custom">
              <div className="areaLink">
                <h3 className='links closeactive'>área privada</h3>
              </div>
            </Link>
          )}

          {isLoggedIn ? (
            <div className="nav-link-custom" onClick={handleLogout}>
              <div className="logoutLink">
                <h3 className='links closeactive'>logout</h3>
              </div>
            </div>
          ) : (
            <Link to="/login" className="nav-link-custom">
              <div className="loginLink">
                <h3 className='links closeactive'>login</h3>
              </div>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavbarCustom;
