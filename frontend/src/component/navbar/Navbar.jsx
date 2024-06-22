import React, { useState } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./NavbarStyles.css";

function Navbar() {
  const navigate = useNavigate();

  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);


  return (
    <div name="home" className={nav ? "navbar navbar-bg" : "navbar"}>
      <div className={nav ? "logo dark" : "logo"}>
        <h2 className="logo">WorldTour.in</h2>
      </div>
      <ul className="nav-menu">
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
        <Link to="Top 6" smooth={true} duration={500}>
          Top 6
        </Link>
        <Link to="Packages" smooth={true} duration={500}>
          Packages
        </Link>
        <Link to="Hotels" smooth={true} duration={500}>
          Hotels
        </Link>
        <Link to="Resorts" smooth={true} duration={500}>
          Resorts
        </Link>
      </ul>

      <div className="nav-icons">
        <button onClick={() => navigate("/login")} >Login</button>
        <button onClick={() => navigate("/reg")}>Register</button>
      </div>

      <div className="hamburger" onClick={handleNav}>
        {!nav ? (
          <div className="mobileIcon">=</div>
        ) : (
          <AiOutlineClose style={{ color: "#000" }} className="icon" />
        )}
      </div>

      <div className={nav ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-nav">
          <Link to="home" smooth={true} duration={500}>
            <li>Home</li>
          </Link>
          <Link to="Resorts" smooth={true} duration={500}>
            <li>Resorts</li>
          </Link>
          <Link to="Top 6" smooth={true} duration={500}>
            <li>Top 6</li>
          </Link>
          <Link to="Packages" smooth={true} duration={500}>
            <li>Packages</li>
          </Link>
          <Link to="Hotels" smooth={true} duration={500}>
            <li>Hotels</li>
          </Link>
        </ul>
        <div className="mobile-menu-bottom">
          <div className="menu-icons">
            <button onClick={() => navigate("/login")} >Login</button>
            <button onClick={() => navigate("/reg")}>Register</button>

          </div>
          <div className="social-icons">
            <FaFacebook className="icon" />
            <FaInstagram className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaYoutube className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
