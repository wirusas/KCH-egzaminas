// IMPORTS
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import "../styles/navStyles.css";
// IMPORTS

// MAIN EXPORT
export const Navigation = () => {

  // HAMBURGER
  return (
    <>
      <nav className="main-container-local">
        <div className="navbar">
          <div className="container nav-container">
            <input className="checkbox" type="checkbox" name="" id="" />
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="logo">
              
             
              <img className="nav-logo-local" src={logo} alt="logo" />
            </div>
            <div className="menu-items">
              <li>
                <Link to="/registrationpage">Knygos registracija</Link>
              </li>
              <li>
                <Link to="/mainpage" >Pagrindinis</Link>
              </li>
              <li>
                <Link to="/booksearch" >Filtras</Link>
              </li>
              <li>
              <Link to="/reviews">Atsiliepimai</Link>
              </li>
             
              <li>
                <a href="#contacts-local">Kontaktai</a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
  // HAMBURGER
};
