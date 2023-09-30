import React from "react";
import { Link } from "react-router-dom";
const EnrollNow = () => {
  return (
    <div class="course-enrollment">
      <h1>Enroll Now</h1>
      <p>Enroll in this course to learn the fundamentals of data science.</p>
      <Link href="#" class="enroll-button">
        Enroll Now
      </Link>
    </div>
  );
};

export default EnrollNow;
