import React from "react";
import { Link } from "react-router";
import "../Navbar/style.css";
function Navbar() {
  return (
    <div>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/form"}>Form</Link> 
        <Link to={"/child"}>Child</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/profile"}>Profile</Link>
        <Link to={"/parent"}>Parent</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
    </div>
  );
}

export default Navbar;
