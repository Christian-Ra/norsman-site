import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import houzzLogo from "../../Graphics/houzz-logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../../Graphics/Norsman-Logo-2021-C-no-subtitle.png";
import "./MenuBar.scss";

export default function MenuBar() {
  const [menuCoverVisible, setCoverVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  // const navigate = useNavigate();

  const toggleMenu = () => {
    setCoverVisible(!menuCoverVisible);
    setActiveMenu(!activeMenu);
  };

  return (
    <header className="headerBar">
      <div
        className="overlay"
        style={{ display: menuCoverVisible ? "block" : "none" }}
        onClick={() => toggleMenu()}
      ></div>
      <div className="hamburger" onClick={() => toggleMenu()}>
        <div className={activeMenu ? "line active" : "line"}></div>
        <div className={activeMenu ? "line active" : "line"}></div>
        <div className={activeMenu ? "line active" : "line"}></div>
      </div>
      <nav className="homebar" style={{ right: menuCoverVisible ? 0 : -900 }}>
        <ul>
          <li>
            <Link to="/norsman-site" state={{ targetId: "landing" }}>
              <img className="homebar-logo" src={logo} alt="norsman" />
            </Link>
          </li>
          <section className="navLinks">
            <li>
              <Link to="/norsman-site" state={{ targetId: "project-gallery" }}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/norsman-site/about">About Us</Link>
            </li>
            <li>
              <Link to="/norsman-site/collage">Collage</Link>
            </li>
            <li>
              <Link to="/norsman-site/contact">Contact</Link>
            </li>
          </section>
          <section className="footerLinks">
            <li className="footerLink">info@norsmanarchitects.com</li>
            <li className="footerLink">+ 1-773-252-9448</li>
            <li className="footerLink">
              <a href="https://www.instagram.com/norsman_architects/?hl=en">
                <InstagramIcon fontSize="30px" className="social-icon" />
              </a>
              <a href="https://www.facebook.com/NorsmanArchitects/">
                <FacebookIcon fontSize="30px" className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/company/norsman-architect-led-design-build/">
                <LinkedInIcon fontSize="30px" className="social-icon" />
              </a>
              <a href="https://www.houzz.com/professionals/architects-and-building-designers/norsman-architects-ltd-pfvwus-pf~1635802663">
                <img src={houzzLogo} className="houzzIcon" alt="houzz logo" />
              </a>
            </li>
          </section>
        </ul>
      </nav>
      <Link
        to="/norsman-site"
        state={{ targetId: "landing" }}
        className="small-logo"
      >
        <img src={logo} alt="norsman" />
      </Link>
      <Outlet />
    </header>
  );
}
