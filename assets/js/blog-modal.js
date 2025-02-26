'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Function to toggle the blog modal
  const toggleBlogModal = function () {
    const modalContainer = document.querySelector('[data-blog-modal-container]');
    const overlay = document.querySelector('[data-blog-overlay]');
    modalContainer.classList.toggle('active');
    overlay.classList.toggle('active');
  };

  // Get all blog post items
  const blogItems = document.querySelectorAll('[data-blog-item]');

  // Add click event to each blog post item to open the modal
  blogItems.forEach(item => {
    item.addEventListener('click', function () {
      // Retrieve data from the blog preview
      const coverImg = this.querySelector('[data-blog-cover]');
      const titleElem = this.querySelector('[data-blog-title]');
      // (Optional) If you have a date element in your blog item, include it. Otherwise, leave blank.
      const dateElem = this.querySelector('[data-blog-date]');
      const previewText = this.querySelector('[data-blog-preview-text]');

      // Update modal content
      const modalCover = document.querySelector('[data-modal-blog-cover]');
      const modalTitle = document.querySelector('[data-modal-blog-title]');
      const modalText = document.querySelector('[data-modal-blog-text]');
      const modalExtraImages = document.querySelector('[data-modal-blog-extra-images]');

      modalCover.src = coverImg.src;
      modalCover.alt = coverImg.alt;

      // Clear any previous extra images
      modalExtraImages.innerHTML = '';
      // If extra images exist in the blog item, add them to the modal
      const extraImages = this.querySelectorAll('[data-extra-image]');
      extraImages.forEach(img => {
        const newImg = document.createElement('img');
        newImg.src = img.src;
        newImg.alt = img.alt;
        modalExtraImages.appendChild(newImg);
      });

      // Open the modal
      toggleBlogModal();
    });
  });

  // Close the modal when clicking the close button or the overlay
  const modalCloseBtn = document.querySelector('[data-blog-modal-close]');
  const overlay = document.querySelector('[data-blog-overlay]');
  modalCloseBtn.addEventListener('click', toggleBlogModal);
  overlay.addEventListener('click', toggleBlogModal);
});
