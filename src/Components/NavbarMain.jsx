import Container from 'react-bootstrap/Container';
import '../fonts.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {ShoppingCart} from'phosphor-react'
import { useSelector } from "react-redux";

function NavbarMain() {
  const cart = useSelector((state) => state.cart.cart);
  return (
    <Navbar expand="lg" className=" sticky-top Nav">
      <Container>
        <Navbar.Brand className="brand fs-3" href="/">MODAMIX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="custom-link-font" as={Link} to={'/'}>Home</Nav.Link>
            <Nav.Link className="custom-link-font"as={Link} to={'About'}>What's New</Nav.Link>
            <Nav.Link className="custom-link-font"as={Link} to={'Login'}>Login</Nav.Link>
            <Nav.Link className="custom-link-font"as={Link} to={'SignUp'}>Sign up</Nav.Link>
            <Nav.Link className='position-relative custom-link-font' as={Link} to={'Cart'}>
              <ShoppingCart size={32} />
              <span className="position-absolute top-6 start-100 translate-middle badge rounded-pill bg-danger">{cart.length}</span>
              </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;