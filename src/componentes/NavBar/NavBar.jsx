import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import CartWidget from '../CartWidget/CartWidget'
import NavBarBrand from './NavBarBrand'
import { Link } from 'react-router-dom'
import '../NavBar/NavBar.css'

function NavBar() {
  return (
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="black" variant="dark" >
        <Container>
          <Link to='/'>
            <NavBarBrand />
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className='linkNav' to='/' >Inicio</Link>
              <Link className='linkNav' to='/'>Cursos</Link>
              <Link className='linkNav' to='/categoria/principiante'>Principiante</Link>
              <Link className='linkNav' to='/categoria/avanzado'>Avanzado</Link>
            </Nav>
          </Navbar.Collapse>
          <Link to='/cart'>
            <CartWidget/>
          </Link>
        </Container>
      </Navbar>
  );
}

export default NavBar;
