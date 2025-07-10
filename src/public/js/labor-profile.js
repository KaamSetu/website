// // Sidebar toggle script from previous template
// const toggleBtn = document.querySelector(".toggle-sidebar");
// const sidebar = document.querySelector(".sidebar");
// const mainContent = document.querySelector(".main-content");
// const footer = document.querySelector(".footer");

// toggleBtn.addEventListener("click", () => {
//   sidebar.classList.toggle("collapsed");
//   mainContent.classList.toggle("expanded");
//   footer.classList.toggle("expanded");
// });

// function handleResize() {
//   if (window.innerWidth <= 768) {
//     sidebar.classList.add("collapsed");
//     mainContent.classList.add("expanded");
//     footer.classList.add("expanded");
//   } else {
//     sidebar.classList.remove("collapsed");
//     mainContent.classList.remove("expanded");
//     footer.classList.remove("expanded");
//   }
// }

// window.addEventListener("resize", handleResize);
// handleResize(); // Initial check

// // Modal Functions
// function openEditProfileModal() {
//   document.getElementById("editProfileModal").style.display = "block";
// }

// function openPasswordUpdateModal() {
//   document.getElementById("passwordUpdateModal").style.display = "block";
// }

// function closeModal(modalId) {
//   document.getElementById(modalId).style.display = "none";
// }

// function confirmLogout() {
//   if (confirm("Are you sure you want to logout?")) {
//     // Add logout logic here
//     window.location.href = "login.html";
//   }
// }

// function confirmAccountDeletion() {
//   if (
//     confirm(
//       "Are you sure you want to delete your account? This action cannot be undone."
//     )
//   ) {
//     // Add account deletion logic here
//     window.location.href = "login.html";
//   }
// }

// // Form submission handlers
// document
//   .getElementById("editProfileForm")
//   .addEventListener("submit", function (e) {
//     e.preventDefault();
//     alert("Profile updated successfully!");
//     closeModal("editProfileModal");
//   });

// document
//   .getElementById("passwordUpdateForm")
//   .addEventListener("submit", function (e) {
//     e.preventDefault();
//     alert("Password updated successfully!");
//     closeModal("passwordUpdateModal");
//   });






// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
    // Sidebar Toggle
    const toggleBtn = document.querySelector('.toggle-sidebar');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const footer = document.querySelector('.footer');

    // Responsive Handling
    const handleResize = () => {
        const isMobile = window.innerWidth <= 768;
        sidebar.classList.toggle('collapsed', isMobile);
        mainContent.classList.toggle('expanded', isMobile);
        footer.classList.toggle('expanded', isMobile);
    };

    // Event Listeners
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('expanded');
        footer.classList.toggle('expanded');
    });

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    // Modal System
    const modalTriggers = {
        'editProfileBtn': 'editProfileModal',
        'passwordUpdateBtn': 'passwordUpdateModal'
    };

    // Modal Handler
    const modalHandler = (modalId, action) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = action === 'open' ? 'block' : 'none';
            
            if (action === 'open') {
                // Add escape key listener
                const escapeHandler = (e) => {
                    if (e.key === 'Escape') modalHandler(modalId, 'close');
                };
                modal._escapeHandler = escapeHandler;
                document.addEventListener('keydown', escapeHandler);
            } else {
                document.removeEventListener('keydown', modal._escapeHandler);
            }
        }
    };

    // Set up modal triggers
    Object.entries(modalTriggers).forEach(([triggerId, modalId]) => {
        const trigger = document.getElementById(triggerId);
        if (trigger) {
            trigger.addEventListener('click', () => modalHandler(modalId, 'open'));
        }
    });

    // Close modals on overlay click
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modalHandler(modal.id, 'close');
        });
    });

    // Form Handling
    const handleFormSubmit = async (formId, successMessage) => {
        const form = document.getElementById(formId);
        if (!form) return;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            try {
                const formData = new FormData(form);
                // Replace with actual fetch call
                // const response = await fetch('/api/endpoint', {
                //     method: 'POST',
                //     body: formData
                // });
                
                // Simulated delay
                await new Promise(resolve => setTimeout(resolve, 1000));
                
                showToast(successMessage, 'success');
                modalHandler(form.closest('.modal').id, 'close');
                form.reset();
            } catch (error) {
                showToast('An error occurred. Please try again.', 'error');
                console.error('Form submission error:', error);
            }
        });
    };

    // Toast Notification System
    const showToast = (message, type = 'info') => {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    };

    // Initialize form handlers
    handleFormSubmit('editProfileForm', 'Profile updated successfully!');
    handleFormSubmit('passwordUpdateForm', 'Password updated successfully!');

    // Account Actions
    const confirmAction = (message, callback) => {
        if (confirm(message)) {
            callback();
        }
    };

    // Logout Handler
    document.getElementById('logoutBtn')?.addEventListener('click', () => {
        confirmAction('Are you sure you want to logout?', () => {
            // Add actual logout logic
            window.location.href = '/login';
        });
    });

    // Account Deletion Handler
    document.getElementById('deleteAccountBtn')?.addEventListener('click', () => {
        confirmAction('Are you sure you want to delete your account? This action cannot be undone.', () => {
            // Add actual deletion logic
            window.location.href = '/login';
        });
    });
});







