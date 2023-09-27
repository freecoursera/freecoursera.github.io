import React from "react";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
import Profile from "./Profile";
// import jdd from "../../public/assets/images"
const Header = () => {
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  return (
    <header>
      <div className="logo">
        <h1>
          <Link to="/">coursera</Link>
        </h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          id="search-input"
          placeholder="Search for a course..."
        />
        <button id="search-button">
          <svg
            xmlns="<http://www.w3.org/2000/svg>"
            height="1em"
            viewBox="0 0 512 512"
          >
            {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
            <style>svg</style>
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </button>
      </div>
      <div id="question-div">
        {/* <!-- <Link to="./Sign-up.html"><button className="profile-button">Sign In</button></Link> --> */}
        {getEmail && getPassword ? (
          <Link id="question-link" to="Profile">
            <img className="profile-button" src="../images/profile.png" />
          </Link>
        ) : (
          <Link to="SignUp">
             <img className="profile-button" src="../images/mortarboard.png" />
          </Link>
          // <SignUp />
        )}
      </div>
    </header>
  );
};

export default Header;
