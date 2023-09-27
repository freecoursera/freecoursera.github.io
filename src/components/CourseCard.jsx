import React from "react";
import { Link } from "react-router-dom";
const CourseCard = ({ imageUrl, heading, desc, link }) => {
  return (
    <div>
      <div className="course-card">
        <img src="../images/ML-and-AI.png" alt="Course 3" />
        <h2>Machine Learning and Artificial Intelligence</h2>
        <p>
          Dive into the world of AI and machine learning, explore cutting-edge
          algorithms, and create intelligent applications.
        </p>
        <Link to="./AI-ML_course.html" className="learn-more-button">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
