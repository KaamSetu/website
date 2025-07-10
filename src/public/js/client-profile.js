// Profile Tabs Functionality
const profileTabs = document.querySelectorAll(".profile-tab");
const profileSections = document.querySelectorAll(".profile-section");

profileTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs and sections
    profileTabs.forEach((t) => t.classList.remove("active"));
    profileSections.forEach((s) => s.classList.remove("active"));

    // Add active class to clicked tab and corresponding section
    tab.classList.add("active");
    document.getElementById(`${tab.dataset.tab}Tab`).classList.add("active");
  });
});

// Edit Profile Functionality
const editBtn = document.querySelector(".edit-btn");
const inputs = document.querySelectorAll(".profile-field input");

editBtn.addEventListener("click", () => {
  const isEditing = editBtn.textContent === "Save Changes";

  if (isEditing) {
    inputs.forEach((input) => input.setAttribute("readonly", true));
    editBtn.textContent = "Edit Profile";
  } else {
    inputs.forEach((input) => input.removeAttribute("readonly"));
    editBtn.textContent = "Save Changes";
  }
});

// Sidebar Toggle (Copied from dashboard)
const toggleBtn = document.querySelector(".toggle-sidebar");
const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".main-content");
const footer = document.querySelector(".footer");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  mainContent.classList.toggle("expanded");
  footer.classList.toggle("expanded");
});

// Responsive sidebar behavior (Copied from dashboard)
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
