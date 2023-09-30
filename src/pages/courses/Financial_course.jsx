import React from "react";
import { Link } from "react-router-dom";
import CourseReview from "../../components/CourseReview";
import FAQ from "../../components/FAQ";
import CourseInstructor from "../../components/CourseInstructor";
import CourseTimeline from "../../components/CourseTimeline";
import EnrollNow from "../../components/EnrollNow";
const Financial_course = () => {
  return (
    <>
      <div class="course-container">
        <div class="course-details">
          <div class="course-details-left">
            <h1>Financial Planning for a Secure Retirement</h1>
            <p>
              This course provides a comprehensive introduction to financial
              independence for retirement planning, covering topics such as
              investment strategies, retirement accounts, and budgeting. Whether
              you are a beginner or have some experience with personal finance,
              this course will equip you with the skills you need to achieve
              financial independence and retire comfortably.
            </p>
            <h2>What You Will Learn</h2>
            <ul class="topics">
              <li>
                Introduction to financial independence for retirement planning
              </li>
              <li>Investment strategies</li>
              <li>Retirement accounts</li>
              <li>Budgeting</li>
            </ul>
          </div>
          <div class="course-details-right">
            <img
              src="../../images/retirement-planning.jpg"
              alt="Financial Independence Image"
              width="387px"
              height="225px"
            />
            <div class="course-details-text">
              <p>
                Learn the fundamentals of financial independence for retirement
                planning with our comprehensive course
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
    </>
  );
};

export default Financial_course;
