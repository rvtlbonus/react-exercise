import React, { useState } from "react";
import "./Navbar.css";
import logo from './assets/logo.png'
import {FaBars } from 'react-icons/fa';

function Navbar() {
  const [visible, setVisible] = useState("navbar-menu");
  const navbarOpen = () => {
    visible == 'navbar-menu' ? setVisible('navbar-menu navbar-visible') : setVisible ('navbar-menu'); 
  }

  return (


      <nav className="navbar">
        <a href="/" className="logo"> <img src={logo} alt="Logo" /> </a>            
        <ul className={visible}>
          <li className="navbar-items"><a className = "navbar-link" href="">Discover Oqulo</a></li>
          <li className="navbar-items"><a className = "navbar-link" href="">Features</a></li>
          <li className="navbar-items"><a className = "navbar-link" href="">Contact</a></li>
        </ul>

        <div onClick = {navbarOpen} className="navbar-hamburger">
          <FaBars className="hamburger" />
        </div>
   
      </nav>

      
  );
}

export default Navbar;