// CustomNavbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
        <span>Home</span>

        <div className="dropdown">
          <span>
            Products
            <span className="dropdown-arrow">&#9662;</span>
          </span>
          {/* Dropdown content */}
          <div className="dropdown-content">
            <li>fc</li>
            <li>Quiz</li>
            <li>qbank</li>
          </div>
        </div>

        <span>Blog</span>
        <span>
          {" "}
          <a href="/products">About Us</a>{" "}
        </span>
        <span>Contact Us</span>
      </div>
    </div>
  );
};

export default CustomNavbar;
