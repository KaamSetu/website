// Modal Functions
function openPaymentModal() {
  document.getElementById("paymentModal").style.display = "block";
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

// Payment Form Submission
document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const paymentMethod = document.getElementById("paymentMethod").value;
  const paymentAmount = document.getElementById("paymentAmount").value;

  if (!paymentMethod) {
    alert("Please select a payment method");
    return;
  }

  if (paymentAmount <= 0 || paymentAmount > 15000) {
    alert("Invalid payment amount");
    return;
  }

  // Simulate payment processing
  alert("Payment Processed Successfully!");
  closeModal("paymentModal");
});

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

window.addEventListener("resize", handleResize);
handleResize(); // Initial check
