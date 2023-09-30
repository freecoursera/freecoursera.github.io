import React from 'react'

const FAQ = () => {
  return (
    <div class="course-faq">
    <h1>Frequently Asked Questions (FAQ)</h1>
    <div class="course-faq-cards" style={{
        justifyContent:"left"
    }} >
        <div class="course-faq-card">
            <h2>What is data science?</h2>
            <p>Data science is the study of data. It involves analyzing data to find patterns and trends,
                and
                using
                those patterns and trends to make predictions about the future.</p>
        </div>
        <div class="course-faq-card">
            <h2>What is machine learning?</h2>
            <p>Machine learning is a subset of artificial intelligence that focuses on algorithms that can
                learn
                from data and make predictions.</p>
        </div>
        <div class="course-faq-card">
            <h2>Is this course suitable for beginners?</h2>
            <p>Yes, this course is designed for both beginners and those with some experience in data
                science.
            </p>
        </div>
    </div>
</div>
  )
}

export default FAQ