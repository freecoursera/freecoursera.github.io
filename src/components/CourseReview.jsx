import React from 'react'

const CourseReview = () => {
  return (
    <div class="course-reviews">
    <h1>Course Reviews</h1>
    <div class="course-reviews-cards">
        <div class="course-review-card">
            <img src="../images/student1.png" alt="Reviewer 1"/>
            <h2>John Doe</h2>
            <p>John Doe is a data scientist with 10 years of experience in the field. He has worked with
                companies
                such as Google and Facebook.</p>
        </div>
        <div class="course-review-card">
            <img src="../images/student2.png" alt="Reviewer 2"/>
            <h2>Jane Doe</h2>
            <p>Jane Doe is a data scientist with 10 years of experience in the field. She has worked with
                companies
                such as Google and Facebook.</p>
        </div>
        <div class="course-review-card">
            <img src="../images/student3.png" alt="Reviewer 3"/>
            <h2>John Smith</h2>
            <p>John Smith is a data scientist with 10 years of experience in the field. He has worked with
                companies
                such as Google and Facebook.</p>
        </div>
    </div>
</div>
  )
}

export default CourseReview