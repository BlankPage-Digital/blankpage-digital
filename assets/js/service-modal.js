document.addEventListener('DOMContentLoaded', function() {
  const serviceItems = document.querySelectorAll('.service-item');
  const modalContainer = document.querySelector('[data-service-modal-container]');
  const modalCloseBtn = document.querySelector('[data-service-modal-close]');
  const overlay = document.querySelector('[data-service-overlay]');
  const modalTitle = document.querySelector('[data-modal-service-title]');
  const modalSections = document.querySelectorAll('.modal-content-section');

  const modalTitles = {
    'it-support': 'IT SUPPORT',
    'marketing-service': 'MARKETING SERVICES',
    'website-dev': 'WEBSITE DEVELOPMENT',
    'seo': 'SEO (COMING SOON)'
  };

  function showModalContent(serviceType) {
    modalSections.forEach(section => {
      if (section.getAttribute('data-modal-content') === serviceType) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  }

  serviceItems.forEach(item => {
    item.addEventListener('click', function() {
      const serviceType = item.getAttribute('data-service-details') || 'it-support';
      if (modalTitles[serviceType]) {
        modalTitle.textContent = modalTitles[serviceType];
      }
      showModalContent(serviceType);
      if (typeof translatePage === 'function') {
        translatePage();
      }
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
});
