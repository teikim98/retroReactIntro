import Logo from './img/Logo.png'
import "../css/Header.min.css"
import Scrollspy from 'react-scrollspy'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent bg-gradient fixed-top pt-3" data-bs-target="#navbar-example">
    <div className="container-fluid">
      <a className="navbar-brand ps-3" href="#"><img src={Logo} alt="Bootstrap" height="80" width ="160" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
        <div className="collapse navbar-collapse" id="navbarNav">
                <Scrollspy items={ ['aboutMe', 'wantTobe', 'contactMe'] } currentClassName="is-current" className="navbar-nav ms-auto me-5">
                <li className="nav-item px-3">
                    <a href="#aboutMe" className='fs-2'>aboutMe</a>
                </li>
                <li className="nav-item px-3">
                    <a href="#wantTobe" className='fs-2'>wantTobe</a>
                </li>
                <li className="nav-item px-3">
                    <a href="#contactMe" className='fs-2'>contactMe</a>
                </li>
                </Scrollspy>
            </div>
    </div>
  </nav>
  
  );
}

export default Header;