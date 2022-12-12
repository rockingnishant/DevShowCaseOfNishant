import profile from "../assets/img/profile-img.jpg";
import {  Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <header id="header">
    <div className="d-flex flex-column">
      <div className="profile">
        <img
          src={profile}
          alt=""
          className="img-fluid rounded-circle"
        />
        <h1 className="text-light">
          <a href="index.html">Nishant Singh</a>
        </h1>
        <div className="social-links mt-3 text-center">
          <a href="#" className="twitter">
            <i className="bx bxl-twitter" />
          </a>
          <a href="#" className="facebook">
            <i className="bx bxl-facebook" />
          </a>
          <a href="#" className="instagram">
            <i className="bx bxl-instagram" />
          </a>
          <a href="#" className="google-plus">
            <i className="bx bxl-skype" />
          </a>
          <a href="#" className="linkedin">
            <i className="bx bxl-linkedin" />
          </a>
        </div>
      </div>
      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li>
            <Link to="home" className="nav-link scrollto active">
              <i className="bx bx-home" /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="about" className="nav-link scrollto">
              <i className="bx bx-user" /> <span>About</span>
            </Link>
          </li>
          <li>
            <Link to="resume" className="nav-link scrollto">
              <i className="bx bx-file-blank" /> <span>Resume</span>
            </Link>
          </li>
          <li>
            <Link to="portfolio" className="nav-link scrollto">
              <i className="bx bx-book-content" /> <span>Portfolio</span>
            </Link>
          </li>
          <li>
            <Link to="#services" className="nav-link scrollto">
              <i className="bx bx-server" /> <span>Services</span>
            </Link>
          </li>
          <li>
            <Link to="contact" className="nav-link scrollto">
              <i className="bx bx-envelope" /> <span>Contact</span>
            </Link>
          </li>
        </ul>
      </nav>
      {/* .nav-menu */}
    </div>
  </header>
  
  );
}

export default Sidebar;
