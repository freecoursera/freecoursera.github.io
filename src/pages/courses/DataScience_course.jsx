import React from "react";
import { Link } from "react-router-dom";
import CourseReview from "../../components/CourseReview";
import FAQ from "../../components/FAQ";
import CourseInstructor from "../../components/CourseInstructor";
import CourseTimeline from "../../components/CourseTimeline";
const DataScience_course = () => {
  return (
    <>
      <div class="course-container">
        <div class="course-details">
          <div class="course-details-left">
            <h1>Data Science for Everybody, Everywhere</h1>
            <p>
              This course provides a comprehensive introduction to data science,
              covering topics such as data analysis, machine learning, and data
              visualization. Whether you are a beginner or have some experience
              with data, this course will equip you with the skills you need to
              excel in the field of data science.
            </p>
            <h2>What You Will Learn</h2>
            <ul class="topics">
              <li>Introduction to data science</li>
              <li>Python for data science</li>
              <li>Data analysis</li>
              <li>Machine learning</li>
              <li>Data visualization</li>
            </ul>
          </div>
          <div class="course-details-right">
            <img src="../../images/data-science.png" alt="Data Science Image" />
            <div class="course-details-text">
              <p>
                Learn the fundamentals of data science with our comprehensive
                course
              </p>
              <Link href="#" class="enroll-button">
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
        <CourseTimeline />
        <CourseInstructor />
        <CourseReview />
        <FAQ />
      </div>
    </>
  );
};

export default DataScience_course;
