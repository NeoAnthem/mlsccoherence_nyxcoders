let menuicn = document.querySelector(".menuicn");
let nav = document.querySelector(".navcontainer");

menuicn.addEventListener("click", () => {
nav.classList.toggle("navclose");
});
// Function to display the logout popup
function showLogoutPopup() {
const popup = document.getElementById("logout-popup");
  popup.style.display = "block"; // Make the popup visible
}

// Function to handle logout confirmation (replace with your actual logout logic)
function logout() {
  // Simulate logout process (e.g., clear session data, redirect to login page)
console.log("Logging out...");
  window.location.href = "home.html"; // Redirect to login page after logout
}

// Check if a logout button element exists
const logoutButton = document.getElementById("logout-button");

if (logoutButton) {
logoutButton.addEventListener("click", showLogoutPopup);
}

// Handle closing the popup (if a close button exists)
const closeButton = document.getElementById("popup-close");

if (closeButton) {
closeButton.addEventListener("click", function () {
    const popup = document.getElementById("logout-popup");
    popup.style.display = "none"; // Hide the popup
});
}


