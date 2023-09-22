profileDetails = {};

document.querySelector(".submit-div").addEventListener('click', (event) => {
  event.preventDefault()

  profileDetails.name = document.getElementById("name").value
  profileDetails.email = document.getElementById("email").value
  profileDetails.password = document.getElementById("password").value

  localStorage.setItem('profileDetails', JSON.stringify(profileDetails))
})