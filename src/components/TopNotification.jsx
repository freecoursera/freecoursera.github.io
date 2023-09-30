import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopNotification = () => {
  const [isHidden, setIsHidden] = useState(false);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className={`contribution-request ${isHidden ? 'hidden' : ''}`}>
      <p>
        🎉🎉This project is part of HacktoberFest 2023. Wanna Contribute?🎉🎉
        Join Our{" "}
      </p>
      <Link to="https://discord.gg/kR573YBTAU">Discord</Link>
      <p> and </p>
      <Link to="https://github.com/freecoursera/freecoursera.github.io">
        GitHub
      </Link>
      <p className="hide-button" onClick={toggleVisibility}>
        Hide
      </p>
    </div>
  );
};

export default TopNotification;
