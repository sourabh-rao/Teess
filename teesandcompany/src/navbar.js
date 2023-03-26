import React from 'react'
import './navbar.css'

function navbar() {
  return (
    <div id="navbar-animmenu">
      <ul class="show-dropdown main-navbar">
        <div class="hori-selector">
          <div class="left"></div>
          <div class="right"></div>
        </div>
        <li><b>home</b></li>
        <li>collection</li>
        <li>Components</li>
      </ul>
    </div>
  );
}

export default navbar
