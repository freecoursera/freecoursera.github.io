import React from "react";
import { Link } from "react-router-dom";
import CourseReview from "../../components/CourseReview";
import FAQ from "../../components/FAQ";
import CourseInstructor from "../../components/CourseInstructor";
import CourseTimeline from "../../components/CourseTimeline";
import EnrollNow from "../../components/EnrollNow";
const AI_Ml_course = () => {
  return (
      <div class="course-container">
        <div class="course-details">
          <div class="course-details-left">
            <h1>Machine Learning and Artificial Intelligence</h1>
            <p>
              This course provides a comprehensive introduction to artificial
              intelligence and machine learning, covering topics such as neural
              networks, deep learning, and natural language processing. Whether
              you are a beginner or have some experience with AI and ML, this
              course will equip you with the skills you need to excel in the
              field of AI and ML.
            </p>
            <h2>What You Will Learn</h2>
            <ul class="topics">
              <li>
                Introduction to artificial intelligence and machine learning
              </li>
              <li>Neural networks</li>
              <li>Deep learning</li>
              <li>Natural language processing</li>
            </ul>
          </div>
          <div class="course-details-right">
            <img
              src="../../images/ML-and-AI.png"
              alt="AI and ML Image"
              width="387px"
              height="225px"
            />
            <div class="course-details-text">
              <p>
                Learn the fundamentals of artificial intelligence and machine
                learning with our comprehensive course
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
        <EnrollNow/>
      </div>
    
  );
};

export default AI_Ml_course;
