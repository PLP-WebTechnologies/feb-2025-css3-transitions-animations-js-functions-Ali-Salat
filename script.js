// Function to store user preference
function savePreference(theme) {
  localStorage.setItem("userTheme", theme);
}

// Function to retrieve preference and apply it
function loadPreference() {
  const theme = localStorage.getItem("userTheme");
  if (theme) {
    document.body.className = theme;
  }
}

// Run function on page load
window.onload = loadPreference;

document.getElementById("animateBtn").addEventListener("click", function () {
  const box = document.getElementById("animatedBox");
  box.style.transition = "transform 0.5s ease-in-out";
  box.style.transform = "translateX(100px)";
});

