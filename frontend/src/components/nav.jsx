import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Nav = () => {
  return (
    <header className="navbar">

      <nav className="nav-links">
        <Link to="/" end>
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Nav;
