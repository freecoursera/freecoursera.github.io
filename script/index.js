if (!JSON.parse(localStorage.getItem("profileDetails"))) {
  document.getElementById("question-div").innerHTML =
    '<a href="./public/Sign-up.html"><button class="profile-button">Sign In</button></a>';
}

function deleteContributionRequest() {
  document.querySelector(".contribution-request").remove();
}

const searchInput = document.getElementById("search-input");
const courseCards = document.querySelectorAll(".course-card");
const courseList = document.getElementById("course-list");
const searchButton = document.getElementById("search-button");

searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase();

  if (searchInput.value == "") {
    courseList.innerHTML = "";
    return;
  }

  courseList.innerHTML = "";

  courseCards.forEach((card) => {
    const courseTitle = card.querySelector("h2").innerText.toLowerCase();
    const cardVisible = courseTitle.includes(searchText);

    if (cardVisible) {
      const listItem = document.createElement("li");
      listItem.textContent = card.querySelector("h2").innerText;
      listItem.style.listStyle = "none";
      listItem.addEventListener("click", function () {
        const learnMoreButton = card.querySelector(".learn-more-button");
        if (learnMoreButton) {
          learnMoreButton.click(); // Trigger the click event
        }
        searchInput.value = "";
      });
      courseList.appendChild(listItem);
    }
  });
});

// Add a click event listener to the search button
searchButton.addEventListener("click", function () {
  const searchText = searchInput.value.toLowerCase();
  courseList.innerHTML = "";

  courseCards.forEach((card) => {
    const courseTitle = card.querySelector("h2").innerText.toLowerCase();
    const cardVisible = courseTitle.includes(searchText);
    card.style.display = cardVisible ? "block" : "none";
  });
});
