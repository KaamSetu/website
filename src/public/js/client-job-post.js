// Sidebar Toggle (Mobile and Desktop, matches profile page)
function isMobile() {
  return window.innerWidth <= 768;
}

toggleBtn.addEventListener("click", () => {
  if (isMobile()) {
    sidebar.classList.toggle("active");
  } else {
    sidebar.classList.toggle("collapsed");
    mainContent.classList.toggle("expanded");
    footer.classList.toggle("expanded");
  }
});

// Responsive sidebar behavior (Copied from profile page)
function handleResize() {
  if (isMobile()) {
    sidebar.classList.remove("collapsed");
    mainContent.classList.add("expanded");
    footer.classList.add("expanded");
    // Hide sidebar by default on mobile
    sidebar.classList.remove("active");
  } else {
    sidebar.classList.remove("active");
    sidebar.classList.remove("collapsed");
    mainContent.classList.remove("expanded");
    footer.classList.remove("expanded");
  }
}

window.addEventListener("resize", handleResize);
handleResize(); // Initial check