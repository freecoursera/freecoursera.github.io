import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const navigate = useNavigate();
  //  console.log(name)
  //  console.log(email)
  //  console.log(password)
  const handleSubmit = () => {
    // if (
    //   email.current.value == emailRegex &&
    //   password.current.value.length >= 8
    // ) {
    localStorage.setItem("nameData", name.current.value);
    localStorage.setItem("emailData", email.current.value);
    localStorage.setItem("passwordData", password.current.value);
    navigate("/");
    // }
  };
  return (
    <div>
      <div class="sign-up-page">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            ref={name}
            type="text"
            placeholder="Your name"
            class="sign-in-input"
            id="name"
            required
          />
          <input
            ref={email}
            type="email"
            placeholder="Enter Email"
            class="sign-in-input"
            id="email"
            required
          />
          <input
            ref={password}
            type="password"
            name="password"
            placeholder="Enter Password"
            class="sign-in-input"
            id="password"
            required
          />
          <div class="submit-div">
            <button id="submit" type="submit" value="submit">
              Submit
            </button>
          </div>
        </form>
        <button class="back">
          <Link to="/">Back</Link>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
