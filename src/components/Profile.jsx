import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
    const getEmail = localStorage.getItem("emailData");
    const getPassword = localStorage.getItem("passwordData");
    const getName = localStorage.getItem("nameData");

  return (
    <div class="profile">
      {/* <!-- <input type="file" name="" id=""> --> */}
      <div class="profile-left-div">
        <img src="../images/profile.png" class="profile-img" />
      </div>
      <div class="profile-right-div">
        <h3 className="profile--heading" id="name">Your Name:</h3> <p className="profile--heading" >{getName}</p>
        <br/>
        <h3 className="profile--heading" id="email">Your Email:</h3> <p  className="profile--heading"  >{getEmail}</p>
        <br/>
        <h3 className="profile--heading" id="password">Your Password:</h3> <p  className="profile--heading"  > {getPassword}</p>
        <br/>
      </div>

      <button class="back">
        <Link to="/">Back</Link>
      </button>
    </div>
  );
};

export default Profile;
