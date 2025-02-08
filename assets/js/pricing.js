'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // Fetch live exchange rates from a free API endpoint
  fetch('https://api.exchangerate.host/latest?base=EUR')
    .then(response => response.json())
    .then(data => {
      const rateSEK = data.rates['SEK'];
      const rateRON = data.rates['RON'];
      
      // Update each pricing option that has a Euro price
      document.querySelectorAll('.pricing-option').forEach(option => {
        const priceElem = option.querySelector('.price');
        // Skip if price is "Free" or "TBA"
        const priceText = priceElem.textContent.trim().toLowerCase();
        if (priceText === 'free' || priceText === 'tba') return;
        
        // Extract base price number (assumes format like "€150")
        const basePrice = parseFloat(priceElem.textContent.replace('€','').trim());
        if (isNaN(basePrice)) return;
        
        const convertedSEK = Math.round(basePrice * rateSEK);
        const convertedRON = Math.round(basePrice * rateRON);
        const convElem = option.querySelector('.price-conversions');
        if (convElem) {
          convElem.innerHTML = `(≈ ${convertedSEK} SEK / ${convertedRON} RON)`;
        }
      });
    })
    .catch(error => console.error('Error fetching exchange rates:', error));
});
