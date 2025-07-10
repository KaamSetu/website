// Sidebar toggle script
const toggleBtn = document.querySelector(".toggle-sidebar");
const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".main-content");
const footer = document.querySelector(".footer");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  mainContent.classList.toggle("expanded");
  footer.classList.toggle("expanded");
});

function handleResize() {
  if (window.innerWidth <= 768) {
    sidebar.classList.add("collapsed");
    mainContent.classList.add("expanded");
    footer.classList.add("expanded");
  } else {
    sidebar.classList.remove("collapsed");
    mainContent.classList.remove("expanded");
    footer.classList.remove("expanded");
  }
}

window.addEventListener("resize", handleResize);
handleResize(); // Initial check

// Modal Functions
function openEditProfileModal() {
  document.getElementById("editProfileModal").style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

function confirmLogout() {
  if (confirm("Are you sure you want to logout?")) {
    // Add logout logic here
    window.location.href = "login.html";
  }
}

// Form submission handler
document
  .getElementById("editProfileForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Profile updated successfully!");
    closeModal("editProfileModal");
  });
