// Apply the theme if saved in localStorage
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.body.classList.add(currentTheme);
}

// Load saved profile data if available
document.getElementById("name").value = localStorage.getItem('name') || '';
document.getElementById("email").value = localStorage.getItem('email') || '';

function saveProfile() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Save the profile information in localStorage
  if (name && email) {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    // Display the saved profile information
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayEmail').textContent = email;

    // Hide input fields and show the profile display section
    document.querySelector('.profile-info').style.display = 'none';
    document.querySelector('.profile-display').style.display = 'block';
    alert("Profile updated successfully!");
  } else {
    alert("Please fill out both fields.");
  }
}

function editProfile() {
  // Show input fields again and hide the profile display
  document.querySelector('.profile-info').style.display = 'block';
  document.querySelector('.profile-display').style.display = 'none';

  // Populate input fields with existing values
  document.getElementById("name").value = localStorage.getItem('name') || '';
  document.getElementById("email").value = localStorage.getItem('email') || '';
}
