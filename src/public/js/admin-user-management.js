// Toggle Sidebar
const toggleBtn = document.querySelector(".toggle-sidebar");
const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".main-content");
const footer = document.querySelector(".footer");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
  mainContent.classList.toggle("expanded");
  footer.classList.toggle("expanded");
});

// Responsive sidebar behavior
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
