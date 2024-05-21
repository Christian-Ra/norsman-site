import { useState } from "react";
import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import logo from "../../Graphics/Norsman_Logo_white.png"
import "./MenuBar.scss";

export default function MenuBar() {
    const [menuCoverVisible, setCoverVisible] = useState(false)
    const toggleMenu = () => {
        setCoverVisible(!menuCoverVisible);
      };

    return (
    <header>
        <div
          className='overlay'
          style={{ display: menuCoverVisible ? "block" : "none" }}
        ></div>
        <div className='hamburger' onClick={() => toggleMenu()}>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
        <nav
          className='homebar'
          style={{ right: menuCoverVisible ? 0 : -400 }}
        >
          <ul>
            <li>
              <Link to='/'>
                <img src={logo} alt='norsman' />
              </Link>
            </li>
            <section className="navLinks">
            <li>
              <Link to='/project'>Projects</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/news'>News</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            </section>
            <section className="footerLinks">

            <li className='footerLink'>info@norsmanarchitects.com</li>
            <li className='footerLink'>+ 1-773-252-9448</li>
            <li className='footerLink'>
              <a href='https://www.facebook.com/NorsmanArchitects/'><FacebookIcon fontSize="30px" className="social-icon"/></a> 
              <a href='https://x.com/norsmanarch'><XIcon fontSize="30px" className="social-icon"/></a>
              <a href='https://www.instagram.com/norsman_architects/?hl=en'><InstagramIcon fontSize="30px" className="social-icon"/></a>
            </li>
            </section>
          </ul>
        </nav>
        <div className='small-logo'>
            <img src={logo} alt='norsman' />
        </div>
      </header>
    )
}