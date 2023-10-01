if (!(JSON.parse( localStorage.getItem("profileDetails")))) {
  document.getElementById('question-div').innerHTML = '<a href="./public/Sign-up.html"><button class="profile-button">Sign In</button></a>';
}

function deleteContributionRequest() {
  document.querySelector(".contribution-request").remove();
}