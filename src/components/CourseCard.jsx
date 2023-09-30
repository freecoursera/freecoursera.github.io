import React from "react";
import { Link } from "react-router-dom";
const CourseCard = ({ imageUrl, heading, desc, link }) => {
  return (
    <div>
      <div className="course-card">
        {/* <img  alt="Course 3" /> */}
        {/* <img src="."  alt="Course 3" /> */}
        <img src="" />
        <h2>Machine Learning and Artificial Intelligence</h2>
        <p>
          Dive into the world of AI and machine learning, explore cutting-edge
          algorithms, and create intelligent applications.
        </p>
        <Link to="ai-ml_course" className="learn-more-button">
          Learn More
        </Link>
      </div>

    </div>
  );
};

export default CourseCard;
