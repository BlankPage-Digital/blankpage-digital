'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Define detailed package information
  const packageDetails = {
    'free': {
      title: 'Free Consultation Details',
      details: '<p>Includes a complimentary 1-hour consultation where we assess your current digital presence and provide personalized suggestions to boost your strategy.</p>'
    },
    'strategy': {
      title: 'Strategy & IT Operations Details',
      details: '<p>This package offers 60 hours per month of professional consulting focused on developing your digital strategy and optimizing IT operations, including platform assessments, roadmap creation, and ongoing support.</p>'
    },
    'website-small': {
      title: 'Website Development – Small Details',
      details: '<p>Ideal for a simple, static website hosted on GitHub. This package covers basic design, content integration, and deployment to create a professional online presence.</p>'
    },
    'website-standard': {
      title: 'Website Development – Standard Details',
      details: '<p>For dynamic websites built on WordPress or Shopify. This package includes custom design, interactive features, and e-commerce integration for a comprehensive solution.</p>'
    },
    'website-premium': {
      title: 'Website Development – Premium Details',
      details: '<p>Designed for large and complex websites on GitHub, this package provides advanced features, custom plugin development, integration with third-party services, and full-scale support.</p>'
    },
    'seo': {
      title: 'SEO Promotion Details',
      details: '<p>This service is coming soon. It will focus on boosting your online visibility through keyword optimization, content marketing, on-page/off-page SEO, and comprehensive performance analytics.</p>'
    }
  };

  const pricingModalContainer = document.querySelector('[data-pricing-modal-container]');
  const pricingOverlay = document.querySelector('[data-pricing-overlay]');
  const pricingModalClose = document.querySelector('[data-pricing-modal-close]');
  const modalTitleElem = document.querySelector('[data-modal-pricing-title]');
  const modalDetailsElem = document.querySelector('[data-modal-pricing-details]');
  const pricingOptions = document.querySelectorAll('.pricing-option[data-package-details]');

  // Function to toggle the modal
  const togglePricingModal = () => {
    pricingModalContainer.classList.toggle('active');
    pricingOverlay.classList.toggle('active');
  };

  // Open modal with package details
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

  // Close modal when clicking the close button or overlay
  pricingModalClose.addEventListener('click', togglePricingModal);
  pricingOverlay.addEventListener('click', togglePricingModal);
});
