'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Define translation keys for each package
  const packageTranslationKeys = {
    'free': {
      title: 'free_modal_title',
      intro: 'free_modal_intro',
      text: 'free_modal_text',
      conclusion: 'free_modal_conclusion'
    },
    'it-support': {
      title: 'it_modal_title',
      intro: 'it_modal_intro',
      text: 'it_modal_text',
      conclusion: 'it_modal_conclusion'
    },
    'marketing': {
      title: 'marketing_modal_title',
      intro: 'marketing_modal_intro',
      text: 'marketing_modal_text',
      conclusion: 'marketing_modal_conclusion'
    },
    'webdev': {
      title: 'webdev_modal_title',
      intro: 'webdev_modal_intro',
      text: 'webdev_modal_text',
      conclusion: 'webdev_modal_conclusion'
    }
  };

  const pricingModalContainer = document.querySelector('[data-pricing-modal-container]');
  const pricingOverlay = document.querySelector('[data-pricing-overlay]');
  const pricingModalClose = document.querySelector('[data-pricing-modal-close]');
  const modalTitleElem = document.querySelector('[data-modal-pricing-title]');
  const modalDetailsElements = {
    title: document.querySelector('[data-i18n="dynamic_modal_title"]'),
    intro: document.querySelector('[data-i18n="dynamic_modal_intro"]'),
    text: document.querySelector('[data-i18n="dynamic_modal_text"]'),
    conclusion: document.querySelector('[data-i18n="dynamic_modal_conclusion"]')
  };
  const pricingOptions = document.querySelectorAll('.pricing-option[data-package-details]');

  const togglePricingModal = () => {
    pricingModalContainer.classList.toggle('active');
    pricingOverlay.classList.toggle('active');
  };

  pricingOptions.forEach(option => {
    option.addEventListener('click', function() {
      const packageKey = this.dataset.packageDetails;
      const translationKeys = packageTranslationKeys[packageKey];

      if (translationKeys) {
        // Set translation attributes
        modalDetailsElements.title.setAttribute('data-i18n', translationKeys.title);
        modalDetailsElements.intro.setAttribute('data-i18n', translationKeys.intro);
        modalDetailsElements.text.setAttribute('data-i18n', translationKeys.text);
        modalDetailsElements.conclusion.setAttribute('data-i18n', translationKeys.conclusion);

        // Refresh translations
        if (typeof refreshTranslations === 'function') {
          refreshTranslations();
        }

        togglePricingModal();
      }
    });
  });

  // Keep your existing contact button and scroll functionality
  const scrollToSidebar = () => { /*...*/ };
  document.querySelectorAll('[data-contact-btn]').forEach(btn => { /*...*/ });
  pricingModalClose.addEventListener('click', togglePricingModal);
  pricingOverlay.addEventListener('click', togglePricingModal);
});
