import React, { useState, useRef } from "react";
import { Link } from "react-scroll";
import underline from "../assets/nav_underline.svg";
import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/menu_close.svg";

import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <h1>Purna Chandramouli</h1>
      <img
        src={menu_open}
        onClick={openMenu}
        alt="Menu Open"
        className="nav-mob-open"
      />

      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt="Menu Close"
          className="nav-mob-close"
        />
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setMenu("home")}
          >
            Home
          </Link>
          {menu === "home" && <img src={underline} alt="underline" />}
        </li>

        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setMenu("about")}
          >
            About Me
          </Link>
          {menu === "about" && <img src={underline} alt="underline" />}
        </li>

        <li>
          <Link
            to="services"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setMenu("services")}
          >
            Services
          </Link>
          {menu === "services" && <img src={underline} alt="underline" />}
        </li>

        <li>
          <Link
            to="mywork"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setMenu("mywork")}
          >
            Portfolio
          </Link>
          {menu === "mywork" && <img src={underline} alt="underline" />}
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            onClick={() => setMenu("contact")}
          >
            Contact
          </Link>
          {menu === "contact" && <img src={underline} alt="underline" />}
        </li>
      </ul>
      <div className="nav-connect">
        <Link
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          onClick={() => setMenu("contact")}
        >
          Connect With Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
