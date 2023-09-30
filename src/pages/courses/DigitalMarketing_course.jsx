import React from "react";
import { Link } from "react-router-dom";
import CourseReview from "../../components/CourseReview";
import FAQ from "../../components/FAQ";
import CourseInstructor from "../../components/CourseInstructor";
import CourseTimeline from "../../components/CourseTimeline";
import EnrollNow from "../../components/EnrollNow";
const DigitalMarketing_course = () => {
  return (
    <>
      <div class="course-container">
        <div class="course-details">
          <div class="course-details-left">
            <h1>Digital Marketing Fundamentals explained</h1>
            <p>
              This course provides a comprehensive introduction to digital
              marketing, covering topics such as social media marketing, email
              marketing, and search engine optimization. Whether you are a
              beginner or have some experience with digital marketing, this
              course will equip you with the skills you need to excel in the
              field of digital marketing.
            </p>
            <h2>What You Will Learn</h2>
            <ul class="topics">
              <li>Introduction to digital marketing</li>
              <li>Social media marketing</li>
              <li>Email marketing</li>
              <li>Search engine optimization</li>
            </ul>
          </div>
          <div class="course-details-right">
            <img
              src="../../images/digital-marketing.jpg"
              alt="Digital Marketing Image"
              width="387px"
              height="225px"
            />
            <div class="course-details-text">
              <p>
                Learn the fundamentals of digital marketing with our
                comprehensive course
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

export default DigitalMarketing_course;
