import React from "react";
import { Link } from "react-router-dom";
// import hero_img from "../images/"
const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to Your Learning Journey</h1>
          <p style={{paddingBottom: "30px"}}>
            Coursera is your one-stop destination for online learning. Discover
            a wide range of high-quality courses, access resources, and connect
            with instructors and peers. Unlock your potential to meet today's
            challenges and prepare you for tomorrow's opportunities. Enroll now!
            Take the first step towards your educational goals today!
          </p>
          <Link to="#" className="cta-button">
            Get Started
          </Link>
        </div>
        <div className="hero-img">
          <img
            src="../images/hero-img.png"
            alt="header-img"
            height="300px"
          />
        </div>
      </section>

      <section className="course-cards">
        <div className="course-card">
          <img src="../images/data-science.png" alt="Course 1" />
          <h2>Data Science for Everybody, Everywhere.</h2>
          <p>
            Learn fundamentals of data science, from data analysis to machine
            learning, gain insights to make data-driven decisions.
          </p>
          <Link to="./DataScience_course.html" className="learn-more-button">
            Learn More
          </Link>
        </div>
        <div className="course-card">
          <img src="../images/digital-marketing.jpg" alt="Course 2" />
          <h2>Digital Marketing Fundamentals explained</h2>
          <p>
            Master the essentials of digital marketing, from SEO to social
            media, and boost your online presence to reach a wider audience.
          </p>
          <Link
            to="./Digital_Marketing_course.html"
            className="learn-more-button"
          >
            Learn More
          </Link>
        </div>
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
        <div className="course-card">
          <img src="../images/retirement-planning.jpg" alt="Course 4" />
          <h2>Financial Planning for a Secure Retirement</h2>
          <p>
            Plan your financial future with confidence by understanding
            retirement strategies, investments, and wealth management.
          </p>
          <Link to="./Financial_course.html" className="learn-more-button">
            Learn More
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
