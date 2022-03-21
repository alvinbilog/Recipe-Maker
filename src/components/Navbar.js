import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import "../scss/Navbar.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      <nav>
        <div className="logo">
          <Link to="/" className="links">
            <h1>Recipes Maker</h1>
          </Link>
        </div>
        {/* <Searchbar /> */}

        <div className="nav-links">
          <Link to="/recipe" className="links">
            <h1>Recipes</h1>
          </Link>
          <Link to="/create" className="links">
            <h1>Create</h1>
          </Link>
          <Link to="/contact" className="links">
            <h1>Contacts</h1>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
