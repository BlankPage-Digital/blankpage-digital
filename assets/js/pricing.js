'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Fetch live exchange rates from exchangerate.host (free API; no API key needed)
  fetch('https://api.exchangerate.host/latest?base=SEK')
    .then(response => response.json())
    .then(data => {
      // Assume conversion from SEK to RON is available:
      const rateRON = data.rates['RON'];
      document.querySelectorAll('.pricing-option').forEach(option => {
        // Only update if there is a numeric base price (free/coming soon remain unchanged)
        const basePriceSEK = option.getAttribute('data-price-sek');
        const basePriceRON = option.getAttribute('data-price-ron');
        if (!basePriceSEK || basePriceSEK === "0") return;
        
        const convElem = option.querySelector('.price-conversions');
        // Here we update the innerHTML based on the current language.
        // For this example, assume the translator script sets a global variable currentLang.
        // (Your translator script should update currentLang to 'ro' for Romanian, otherwise 'en' or 'sv'.)
        if (window.currentLang && window.currentLang === 'ro') {
          convElem.innerHTML = `(≈ ${basePriceRON} RON)`;
          option.querySelector('.price').innerHTML = `${basePriceSEK} SEK ≈ ${basePriceRON} RON`;
        } else {
          convElem.innerHTML = `(≈ ${basePriceSEK} SEK)`;
          option.querySelector('.price').innerHTML = `${basePriceSEK} SEK`;
        }
      });
    })
    .catch(error => console.error('Error fetching exchange rates:', error));
});
