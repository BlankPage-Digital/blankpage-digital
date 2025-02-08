'use strict';

// Function to toggle the blog modal
const toggleBlogModal = function() {
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
    const dateElem = this.querySelector('[data-blog-date]');
    const previewText = this.querySelector('[data-blog-preview-text]');

    // Update modal content
    const modalCover = document.querySelector('[data-modal-blog-cover]');
    const modalTitle = document.querySelector('[data-modal-blog-title]');
    const modalDate = document.querySelector('[data-modal-blog-date]');
    const modalText = document.querySelector('[data-modal-blog-text]');
    const modalExtraImages = document.querySelector('[data-modal-blog-extra-images]');

    modalCover.src = coverImg.src;
    modalCover.alt = coverImg.alt;
    modalTitle.textContent = titleElem.textContent;
    modalDate.textContent = dateElem.textContent;
    modalText.textContent = previewText.textContent;

    // Clear any previous extra images
    modalExtraImages.innerHTML = '';
    // If any extra images are included in the blog item, load them into the modal
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

// Close modal when the close button or overlay is clicked
document.querySelector('[data-blog-modal-close]').addEventListener('click', toggleBlogModal);
document.querySelector('[data-blog-overlay]').addEventListener('click', toggleBlogModal);
