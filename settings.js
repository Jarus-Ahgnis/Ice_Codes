// Save the selected theme to localStorage
function changeTheme() {
  const theme = document.getElementById("theme").value;
  localStorage.setItem('theme', theme); // Save selected theme to localStorage
  document.body.classList.remove("light", "dark"); // Remove both theme classes
  document.body.classList.add(theme); // Apply the new theme
}
