import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import Menu from "../../assets/menu.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="Navbar">
      <img src={logo} alt="navbar-logo" className="logo" />
      <div className="DesktopMenu">
        <Link
          activeClass="active"
          to="Intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="DesktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="DesktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="DesktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="DesktopMenuListItem"
        >
          Clients
        </Link>
      </div>
      <button
        className="DesktopMenuButton"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img
          src={contactImg}
          alt="contact us image"
          className="DesktopMenuImg"
        />
        Contact Me
      </button>
      <img
        src={Menu}
        alt="BurgerMenu"
        className="MobMenu"
        onClick={() => setShowMenu(!showMenu)}
      />
      <div className="NavMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="Intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(false)}
        >
          Clients
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="ListItem"
          onClick={() => setShowMenu(!false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
