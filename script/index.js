if (!JSON.parse(localStorage.getItem("profileDetails"))) {
  document.getElementById("question-div").innerHTML =
    '<a href="./public/Sign-up.html"><button class="profile-button">Sign In</button></a>';
}

function deleteContributionRequest() {
  document.querySelector(".contribution-request").remove();
}

// Get references to the search input, course cards, course list container, and search button
const searchInput = document.getElementById("search-input");
const courseCards = document.querySelectorAll(".course-card");
const courseList = document.getElementById("course-list");
const searchButton = document.getElementById("search-button");

// Function to filter courses based on search input

// Add an input event listener to the search input
searchInput.addEventListener("input", function () {
  const searchText = searchInput.value.toLowerCase();

  if (searchInput.value == "") {
    courseList.innerHTML = "";
    return;
  }

  // Clear the course list container
  courseList.innerHTML = "";

  // Iterate over the course cards
  courseCards.forEach((card) => {
    const courseTitle = card.querySelector("h2").innerText.toLowerCase();
    const cardVisible = courseTitle.includes(searchText);

    if (cardVisible) {
      // Create a list item for the matching course title
      const listItem = document.createElement("li");
      listItem.textContent = card.querySelector("h2").innerText;

      // Add a click event listener to trigger the "Learn More" link click
      listItem.addEventListener("click", function () {
        const learnMoreButton = card.querySelector(".learn-more-button");
        if (learnMoreButton) {
          learnMoreButton.click(); // Trigger the click event
        }
        searchInput.value = "";
      });

      // Append the list item to the course list container
      courseList.appendChild(listItem);
    }
  });
});

// Add a click event listener to the search button
searchButton.addEventListener("click", function () {
  const searchText = searchInput.value.toLowerCase();
  // Clear the course list container
  courseList.innerHTML = "";

  // Iterate over the course cards
  courseCards.forEach((card) => {
    const courseTitle = card.querySelector("h2").innerText.toLowerCase();
    const cardVisible = courseTitle.includes(searchText);
    card.style.display = cardVisible ? "block" : "none";
  });
});
