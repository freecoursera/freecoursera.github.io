const profileDetails = localStorage.getItem("profileDetails");
const enrollButton = document.querySelector(".enroll-button");
enrollButton.addEventListener("click", function () {
  if (profileDetails) {
    alert("You are enrolled!");
  } else {
    window.location.href = "sign-up.html";
  }
});