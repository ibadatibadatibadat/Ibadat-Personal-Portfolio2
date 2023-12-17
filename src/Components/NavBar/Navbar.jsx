import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import contactImg from "../../assets/contact.png";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="Navbar">
      <img src={logo} alt="navbar-logo" className="logo" />
      <div className="DesktopMenu">
        <Link className="DesktopMenuListItem">Home</Link>
        <Link className="DesktopMenuListItem">About</Link>
        <Link className="DesktopMenuListItem">Portfolio</Link>
        <Link className="DesktopMenuListItem">Clients</Link>
      </div>
      <button className="DesktopMenuButton">
        <img
          src={contactImg}
          alt="contact us image"
          className="DesktopMenuImg"
        />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
