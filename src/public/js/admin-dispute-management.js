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

// Timeline Modal Functions
function showDetail(title, description, date) {
  document.getElementById("detailModal").innerHTML = `
  <div class="detail-content">
            <h2>Dispute Detail</h2>
            <div class="detail-item">
                <div class="detail-content">
                    <h4>${title}</h4>
                    <p>${description}</p>
                    <small>${date}</small>
                </div>
            </div>
            <!-- Add more detail items as needed -->
            <button class="btn btn-primary" onclick="hideDetail()">Close</button>
        </div>`;
  document.getElementById("detailModal").style.display = "block";
}

function hideDetail() {
    document.querySelectorAll('.detailModal').forEach(modal => {
        modal.style.display = 'none';
    });
}

// Close modal when clicking outside
window.onclick = function (event) {
  if (event.target == document.getElementById("detailModal")) {
    hideDetail();
  }
};
