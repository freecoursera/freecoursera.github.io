profile = JSON.parse( localStorage.getItem("profileDetails") )

document.getElementById('name').innerText = `Name: ${profile.name}`
document.getElementById('email').innerText = `Email: ${profile.email}`
document.getElementById('password').innerText = `Password: ${profile.password}`