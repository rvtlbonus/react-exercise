import React from 'react'
import logo from './assets/logo2.png'
import './Footer.css';

function Footer() {
    return (
    <div className="Footer" >
        <a href="/" className="logo"> <img src={logo} alt="Logo" /> </a>            
        <ul className="footer-menu">
          <li className="navbar-items"><a className = "navbar-link" href="">Discover Oqulo</a></li>
          <li className="navbar-items"><a className = "navbar-link" href="">Features</a></li>
          <li className="navbar-items"><a className = "navbar-link" href="">Contact</a></li>
        </ul>

        <p className='copyright'> Copyright © Oqulo 2018. All rights reserved. </p>
    </div>     
);
}

export default Footer; 