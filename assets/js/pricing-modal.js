document.addEventListener('DOMContentLoaded', function() {
  const pricingOptions = document.querySelectorAll('.pricing-option');
  const modalContainer = document.querySelector('[data-pricing-modal-container]');
  const modalCloseBtn = document.querySelector('[data-pricing-modal-close]');
  const overlay = document.querySelector('[data-pricing-overlay]');
  const modalTitle = document.querySelector('[data-modal-pricing-title]');
  const contactBtn = document.querySelector('[data-contact-btn]');
  const modalSections = document.querySelectorAll('.modal-content-section');
  const sidebar = document.querySelector('[data-sidebar]'); // Ensure your sidebar element has this attribute

  const modalTitles = {
    free: "FREE CONSULTATION",
    "it-support": "IT SUPPORT AND CONSULTING",
    "marketing-service": "MARKETING SERVICES",
    "website-dev": "WEBSITE DEVELOPMENT"
  };

  function showModalContent(packageType) {
    modalSections.forEach(section => {
      if (section.getAttribute('data-modal-content') === packageType) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  }

  pricingOptions.forEach(option => {
    option.addEventListener('click', function() {
      const packageType = option.getAttribute('data-package-details');
      if (modalTitles[packageType]) {
        modalTitle.textContent = modalTitles[packageType];
      }
      showModalContent(packageType);
      if (typeof translatePage === 'function') {
        translatePage();
      }
      // Open the modal.
      modalContainer.classList.add('active');
    });
  });

  // Function to close the modal.
  function closeModal() {
    modalContainer.classList.remove('active');
  }

  // Close modal on clicking the close button.
  modalCloseBtn.addEventListener('click', closeModal);
  // Close modal on clicking the overlay.
  overlay.addEventListener('click', closeModal);
  // Close modal if clicking outside the modal content.
  modalContainer.addEventListener('click', function(e) {
    if (e.target === modalContainer) {
      closeModal();
    }
  });

  // "Contact Me" button: close modal and highlight the sidebar.
  if (contactBtn) {
    contactBtn.addEventListener('click', function(e) {
      e.preventDefault();
      closeModal();
      if (sidebar) {
        sidebar.classList.add('highlight');
        sidebar.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          sidebar.classList.remove('highlight');
        }, 3000);
      }
    });
  }
});
