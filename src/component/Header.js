import Logo from './img/Logo.png'
import { Navbar, Nav} from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg" fixed='top'>
    <Navbar.Brand href="#home" className='ps-5'><img src={Logo} alt="Bootstrap" height="100" width ="200" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" className='me-5' />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="d-flex ms-auto me-5">
        <Nav.Link href="#aboutMe">aboutMe</Nav.Link>
        <Nav.Link href="#wantTobe">wantTobe</Nav.Link>
        <Nav.Link href="#contactMe">contactMe</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  
  );
}

export default Header;