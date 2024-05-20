import React, { useContext } from 'react';
import './navbarCustom.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/AuthContext';

const NavbarCustom = () => {
  const { isLoggedIn } = useContext(UserContext);
  console.log('Navbar isLoggedIn:', isLoggedIn);

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand-custom fs-4">Inner-Visuals</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className='nav-link-custom'>Home</Nav.Link>
            <Nav.Link as={Link} to="/cursos" className='nav-link-custom'>Cursos</Nav.Link>
            <Nav.Link as={Link} to="/about" className='nav-link-custom'>About</Nav.Link>
          </Nav>
          <Nav>
            {!isLoggedIn && (
              <Nav.Link as={Link} to="/area-personal" className='nav-link-custom'>Área Personal</Nav.Link>
            )}
          
              <Nav.Link as={Link} to="/login" className='nav-link-custom'>
                Login/Registro
              </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
