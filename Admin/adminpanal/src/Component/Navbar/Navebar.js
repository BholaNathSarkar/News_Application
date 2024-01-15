/* eslint-disable no-const-assign */
import React from "react";
import { Link } from "react-router-dom";
import "./Navebar.css";

const accessToken = window.localStorage.getItem("access-token");

const Navebar = () => {
  const isLoggedIn = accessToken !== null;
  // console.log(isLoggedIn);
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Update 24×7 Admin</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/newsform">NewsForm</Link>
            </li>
            <li>
              <Link to="/sportsNewsform">SportsNewsform</Link>
            </li>
            <li>
              <Link to="/news">EditNews</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Sign In</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navebar;
