import React from 'react'
import './navbar.css'
import logo from './Teeslogo.jpg';

function navbar() {
  return (
    <div id="navbar-animmenu">
        <ul class="show-dropdown main-navbar">
            <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
            <li>
               <img src={logo} className="App-logo" alt="logo" />
            </li>
            <li>
                <i class="fas fa-tachometer-alt"></i>Dashboard
            </li>
            <li class="active">
                <i class="far fa-address-book"></i>Address Book
            </li>
            <li>
                <i class="far fa-clone"></i>Components
            </li>
        </ul>
    </div>
  );
}

export default navbar
