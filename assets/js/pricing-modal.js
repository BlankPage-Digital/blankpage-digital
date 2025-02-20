'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Define detailed package information
  const packageDetails = {
    'free': {
      title: 'Free Consultation (1 Hour)',
      details: '<p>Get a complimentary 1-hour consultation where we assess your current digital presence and discuss potential improvements. *This session is free.</p>'
    },
    'strategy': {
      title: 'Strategy & IT Operations (Per Hour)',
      details: '<p>This package provides professional consulting at 200 SEK per hour. We help you develop a robust digital strategy, set up your online platforms, and optimize your IT operations. Prices may vary based on the complexity of the project.</p>'
    },
    'website-small': {
      title: 'Website Development – Small',
      details: '<p>A basic static website hosted on GitHub, perfect for establishing a simple online presence. Includes custom design, content integration, and deployment. Price is fixed at 100 SEK; additional features may increase the cost.</p>'
    },
    'website-standard': {
      title: 'Website Development – Standard',
      details: '<p>A dynamic website built on WordPress or Shopify, featuring interactive elements and a tailored design. This package is priced at 500 SEK, with final cost depending on project complexity.</p>'
    },
    'website-premium': {
      title: 'Website Development – Premium',
      details: '<p>An advanced website solution for larger projects on GitHub, including custom development, third-party integrations, and ongoing support. Priced at 1000 SEK, with adjustments based on the scope and complexity.</p>'
    },
    'seo': {
      title: 'SEO Promotion (Coming Soon)',
      details: '<p>Our upcoming SEO services will help boost your online visibility through keyword optimization, content strategy, and comprehensive analytics. Pricing will be determined based on individual requirements.</p>'
    }
  };

  const pricingModalContainer = document.querySelector('[data-pricing-modal-container]');
  const pricingOverlay = document.querySelector('[data-pricing-overlay]');
  const pricingModalClose = document.querySelector('[data-pricing-modal-close]');
  const modalTitleElem = document.querySelector('[data-modal-pricing-title]');
  const modalDetailsElem = document.querySelector('[data-modal-pricing-details]');
  const pricingOptions = document.querySelectorAll('.pricing-option[data-package-details]');

  // Function to toggle the pricing modal
  const togglePricingModal = () => {
    pricingModalContainer.classList.toggle('active');
    pricingOverlay.classList.toggle('active');
  };

  // When a pricing option is clicked, show its details in the modal
  pricingOptions.forEach(option => {
    option.addEventListener('click', function () {
      const packageKey = this.getAttribute('data-package-details');
      const packageInfo = packageDetails[packageKey];
      if (packageInfo) {
        modalTitleElem.textContent = packageInfo.title;
        modalDetailsElem.innerHTML = packageInfo.details;
        togglePricingModal();
      }
    });
  });

  // Function to scroll to the sidebar and highlight it
  const scrollToSidebar = () => {
    const sidebar = document.querySelector('[data-sidebar]');
    if (sidebar) {
      sidebar.scrollIntoView({ behavior: 'smooth' });
      sidebar.classList.add('highlight');
      setTimeout(() => sidebar.classList.remove('highlight'), 3000);
    }
  };

  // Add click event to all "Contact me" buttons (both in pricing cards and in the modal)
  document.querySelectorAll('[data-contact-btn]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Prevent event from bubbling (so that clicking the button inside a pricing card doesn’t also open the modal)
      e.stopPropagation();
      // If the modal is open, close it first
      if (pricingModalContainer.classList.contains('active')) {
        togglePricingModal();
      }
      scrollToSidebar();
    });
  });

  // Close the modal when clicking the close button or the overlay
  pricingModalClose.addEventListener('click', togglePricingModal);
  pricingOverlay.addEventListener('click', togglePricingModal);
});
