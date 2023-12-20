// CustomNavbar.jsx
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const CustomNavbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className={`navbar ${menuActive ? "active" : ""}`}>
      <div className="brand">
        <img src="/logo192.png" width="40px" height="40px" alt="Logo" />
        <h1>NcllexGPT</h1>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`menu ${menuActive ? "active" : ""}`}>
        {/* Your menu items */}
        <span>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </span>

        <div className="dropdown">
          <span>
            Products
            <span className="dropdown-arrow">&#9662;</span>
          </span>
          {/* Dropdown content */}
          <div className="dropdown-content">
            <li>
              <Link to="/quiz">QBank</Link>
            </li>
            <li>
              <Link to="/flashcard">FlashCard</Link>
            </li>
            <li>
              <Link to="/">Jobs</Link>
            </li>
          </div>
        </div>

        <span>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </span>
        <span>
          <li>
            <Link to="/about">About Us</Link>
          </li>
        </span>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </div>
    </div>
  );
};

export default CustomNavbar;
