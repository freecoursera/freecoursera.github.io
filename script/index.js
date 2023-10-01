if (!(JSON.parse(localStorage.getItem("profileDetails")))) {
  document.getElementById('question-div').innerHTML = '<a href="./public/Sign-up.html"><button class="profile-button">Sign In</button></a>';
}

function deleteContributionRequest() {
  document.querySelector(".contribution-request").remove();
}

document.addEventListener('DOMContentLoaded', function () {
    const getStartedButton = document.querySelector('.cta-button');
    const courseCardsSection = document.getElementById('course-cards-section');

    getStartedButton.addEventListener('click', function (event) {
        event.preventDefault();
        courseCardsSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});
