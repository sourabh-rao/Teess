import React from "react";
import "./Navbar.css";
import logo from "./Teeslogo.jpg";

function navbar() {
  
  return (
    <div className="bg-green">
      <div className="container-fluid">
        <nav className="bg-green navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3  bg-white ">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" className="coco mr-5" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="bg-green collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto flex-grow-1">
              <li className="nav-item ">
                <a className="nav-link mr-2" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link mr-2" href="/">
                  ABOUT
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link mr-2" href="/">
                  CONTACT
                </a>
              </li>
            </ul>

            {/* <div className="form-group has-search flex-grow-1">
              <span className="fa fa-search form-control-feedback"></span>
              <input
                type="text"
                className="form-control"
                placeholder="Search Product"
              />
            </div> */}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default navbar;
