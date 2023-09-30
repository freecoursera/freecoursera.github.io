// WARNING: you might need to update 'imgSource' of all the objects in the 'course-page-data.json' file if you move those images or JSON file itself. (Writing comment here since JSON files do not allow comments)
const url = window.location.href;
const urlParams = new URLSearchParams(new URL(url).search);
const decodedValue = decodeURIComponent(urlParams.get("name"));

function createTopicListItem(topic) {
  let topicListItem = document.createElement('li');
  topicListItem.innerText = topic;
  
  return topicListItem
}

function createTimelineItem(timelineItem) {
  let timelineItemDiv = document.createElement('div');
  timelineItemDiv.className = 'timeline-item';

  let timelineDateDiv = document.createElement('div');
  timelineDateDiv.className = 'timeline-date';
  timelineDateDiv.innerText = timelineItem.date;

  let timelineContentDiv = document.createElement('div');
  timelineContentDiv.className = 'timeline-content';

  let timelineTitleH2 = document.createElement('h2');
  timelineTitleH2.innerText = timelineItem.title;

  let timelineDescriptionP = document.createElement('p');
  timelineDescriptionP.innerText = timelineItem.description;

  timelineContentDiv.append(timelineTitleH2);
  timelineContentDiv.append(timelineDescriptionP);
  timelineItemDiv.append(timelineDateDiv);
  timelineItemDiv.append(timelineContentDiv);

  return timelineItemDiv;
}

function createInstructorCard(instructor) {
  let courseInstructorCardDiv = document.createElement('div');
  courseInstructorCardDiv.className = 'course-instructor-card';

  let instructorImage = document.createElement('img');
  instructorImage.src = instructor.imgSource;
  instructorImage.alt = instructor.imgAlt;

  let instructorNameH2 = document.createElement('h2');
  instructorNameH2.innerText = instructor.name;

  let instructorDescriptionP = document.createElement('p');
  instructorDescriptionP.innerText = instructor.description;

  courseInstructorCardDiv.append(instructorImage);
  courseInstructorCardDiv.append(instructorNameH2);
  courseInstructorCardDiv.append(instructorDescriptionP);

  return courseInstructorCardDiv;
}

function createReviewCard(review) {
  let courseReviewCardDiv = document.createElement('div');
  courseReviewCardDiv.className = 'course-review-card';

  let reviewerImg = document.createElement('img');
  reviewerImg.src = review.imgSource;
  reviewerImg.alt = review.imgAlt;

  let reviewerNameH2 = document.createElement('h2');
  reviewerNameH2.innerText = review.name;

  let reviewP = document.createElement('p');
  reviewP.innerText = review.review;

  courseReviewCardDiv.append(reviewerImg);
  courseReviewCardDiv.append(reviewerNameH2);
  courseReviewCardDiv.append(reviewP);

  return (courseReviewCardDiv);
}

function createFaqCard(faqItem) {
  let courseFaqCardDiv = document.createElement('div');
  courseFaqCardDiv.className = 'course-faq-card';

  let faqQuestionH2 = document.createElement('h2');
  faqQuestionH2.innerText = faqItem.question;

  let faqAnswerP = document.createElement('p');
  faqAnswerP.innerText = faqItem.answer;

  courseFaqCardDiv.append(faqQuestionH2);
  courseFaqCardDiv.append(faqAnswerP);

  return (courseFaqCardDiv);
}

async function fetchData() {
  try {
    const response = await fetch('course-page-data.json');
    const data = await response.json();

    // Selecting correct data for the requested page
    let courseData;
    for (obj of data) {
      if (obj.title.toLowerCase() == decodedValue.toLowerCase()) {
        courseData = obj;
        break;
      }
    }
    if (!courseData) window.location.href = '/'; // Returning user to homepage if data is not found

    const courseTitle = document.getElementById('course-title');
    const courseDescription = document.getElementById('course-description');
    const courseTopics = document.getElementById('course-topics');
    const courseImage = document.getElementById('course-image');
    const courseEnrollmentSubMessage = document.getElementById('course-enrollment-sub-message');
    const courseEnrollmentLink1 = document.getElementById('course-enrollment-link1');
    const courseTimeline = document.getElementById('timeline');
    const courseInstructorCards = document.getElementById('course-instructor-cards');
    const courseReviewCards = document.getElementById('course-review-cards');
    const courseFaqCards = document.getElementById('course-faq-cards');
    const courseEnrollmentMessage = document.getElementById('course-enrollment-message');
    const courseEnrollmentLink2 = document.getElementById('course-enrollment-link-2');

    courseTitle.innerText = courseData.title;
    courseDescription.innerText = courseData.description;
    courseData.topics.forEach(topic => { courseTopics.append(createTopicListItem(topic)); });
    courseImage.src = courseData.imgSource;
    courseImage.alt = courseData.imgAlt;
    courseImage.width = 387;
    courseImage.height = 225;
    courseEnrollmentSubMessage.innerText = courseData.enrollmentSubMessage;
    courseEnrollmentLink1.href = courseData.enrollmentLink;
    courseData.timeline.forEach(timelineItem => { courseTimeline.append(createTimelineItem(timelineItem)); });
    courseData.instructors.forEach(instructor => { courseInstructorCards.append(createInstructorCard(instructor)); });
    courseData.reviews.forEach(review => { courseReviewCards.append(createReviewCard(review)); });
    courseData.faq.forEach(faqItem => { courseFaqCards.append(createFaqCard(faqItem)); });
    courseEnrollmentMessage.innerText = courseData.enrollmentMainMessage;
    courseEnrollmentLink2.href = courseData.enrollmentLink;

  }
  catch (error) {
    console.error('Error: ', error);
  }
}
fetchData()