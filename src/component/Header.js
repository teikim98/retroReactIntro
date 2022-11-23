import Logo from './img/Logo.png'
import { Navbar, Nav} from 'react-bootstrap';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent bg-gradient fixed-top pt-3">
    <div className="container-fluid">
      <a className="navbar-brand ps-3" href="#"><img src={Logo} alt="Bootstrap" height="80" width ="160" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto me-5">
          <li className="nav-item px-3">
            <a href="#aboutMe" className='fs-2'>aboutMe</a>
          </li>
          <li className="nav-item px-3">
            <a href="#wantTobe" className='fs-2'>wantTobe</a>
          </li>
          <li className="nav-item px-3">
            <a href="#contactMe" className='fs-2'>contactMe</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  );
}

export default Header;

<Navbar expand="lg" fixed="top" className='bg-transparent'>
<Navbar.Brand href="#home" className='ps-5'><img src={Logo} alt="Bootstrap" height="100" width ="200" /></Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" className='me-5' />
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="d-flex ms-auto me-5">
    <Nav.Link bg ="blue" href="#aboutMe" className='fs-2'>aboutMe</Nav.Link>
    <Nav.Link href="#wantTobe" className='fs-2'>wantTobe</Nav.Link>
    <Nav.Link href="#contactMe" className='fs-2'>contactMe</Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>