import React from 'react'

const CourseInstructor = () => {
  return (
    // <!-- div for course instructors -->
    <div class="course-instructors">
        <h1>Course Instructors</h1>
        <div class="course-instructors-cards">
            <div class="course-instructor-card">
                <img src="../images/instructor1.png" alt="Instructor 1"/>
                <h2>John Doe</h2>
                <p>John Doe is a data scientist with 10 years of experience in the field. He has worked with
                    companies
                    such as Google and Facebook.</p>
            </div>
            <div class="course-instructor-card">
                <img src="../images/instructor2.png" alt="Instructor 2"/>
                <h2>Jane Doe</h2>
                <p>Jane Doe is a data scientist with 10 years of experience in the field. She has worked with
                    companies
                    such as Google and Facebook.</p>
            </div>
            <div class="course-instructor-card">
                <img src="../images/instructor3.png" alt="Instructor 3" width="202px" height="202px"/>
                <h2>John Smith</h2>
                <p>John Smith is a data scientist with 10 years of experience in the field. He has worked with
                    companies
                    such as Google and Facebook.</p>
            </div>
        </div>
    </div>
  )
}

export default CourseInstructor