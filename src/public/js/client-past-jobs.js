// Modal Functions
function openJobDetailsModal() {
  document.getElementById("jobDetailsModal").style.display = "block";
}

function openCancellationDetailsModal() {
  document.getElementById("cancellationDetailsModal").style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Close modal when clicking outside
window.onclick = function (event) {
  const modals = document.getElementsByClassName("modal");
  for (let modal of modals) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
};

// Sidebar toggle and responsive functions from previous template
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

function openCancellationDetailsModal(jobStr) {
  try {
    // Parse the JSON string
    const job = JSON.parse(jobStr);
    
    // Populate the modal fields using the name attribute selectors
    document.querySelector('#cancellationDetailsModal input[name="jobTitle"]').value = job.title || "";
    document.querySelector('#cancellationDetailsModal input[name="jobDescription"]').value = job.description || "";
    document.querySelector('#cancellationDetailsModal input[name="jobStartDate"]').value = job.startDate || "";
    document.querySelector('#cancellationDetailsModal input[name="jobCancellationDate"]').value = job.cancellationDate || "";
    document.querySelector('#cancellationDetailsModal textarea[name="jobCancellationReason"]').value = job.reason || "";
    
    // Display the modal
    document.getElementById('cancellationDetailsModal').style.display = 'block';
  } catch (error) {
    console.error('Error parsing job details:', error);
  }
}

// A simple function to close the modal (if you haven't defined it already)
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}


window.addEventListener("resize", handleResize);
handleResize(); // Initial check


/*
root directory amparo contain node modules, public(folder to store temp img file, during derver side file upload to cloudinary), .env, .gitignore, package.json, server.js and src folder
src folder contain controllers(the main logic), db(db connection logic), models(mongoose schema), public(folder to store static files - html, js, css), routes( define various routes), utils(helpers), views(ejs templates)
keep this structure for amparo
*/