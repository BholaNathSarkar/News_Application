import React from "react";
import { Link } from "react-router-dom";
import "./Navebar.css";
import logo from "../images/Logo.png";

const Naveba = () => {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossOrigin="anonymous"
      />

      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ height: "60px" }}
      >
        <Link to="/" className="navbar-brand">
          <img
            // mediaapp\src\images\Logo.jpg
            className="round-logo"
            src={logo} // Replace with the URL of your logo image
            alt="Your Logo" // Add an appropriate alt text for your logo
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link" to="/sports">
              Sports
            </Link>
            <Link className="nav-item nav-link" to="/aboutus">
              AboutUs
            </Link>
            <Link className="nav-item nav-link" to="/connectus">
              ContactUs
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Naveba;
