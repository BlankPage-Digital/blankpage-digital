document.addEventListener('DOMContentLoaded', function() {
  // Select all pricing options and modal elements
  const pricingOptions = document.querySelectorAll('.pricing-option');
  const modalContainer = document.querySelector('[data-pricing-modal-container]');
  const modalDetails = document.querySelector('[data-modal-pricing-details]');
  const modalCloseBtn = document.querySelector('[data-pricing-modal-close]');
  const overlay = document.querySelector('[data-pricing-overlay]');

  // Define modal content for each package using translation keys via data-i18n
  const modalContent = {
    free: `
      <div class="modal-package free-package">
        <h4 data-i18n="modal_free_title">FREE CONSULTATION</h4>
        <p data-i18n="modal_free_intro">
          Welcome to BlankPage! Blank today, Limitless tomorrow.
          <br>Discover the potential of your project with a complimentary one-hour consultation. This session is designed to explore your ideas and set the stage for a successful partnership, whether it is a new website, IT support, or a winning marketing strategy.
        </p>
        <p data-i18n="modal_free_text">
          <br>-Offering: One-hour session to discuss your project in depth. Available in person, over the phone, or via written messages.
          <br>-Purpose: Explore ideas for website development, IT solutions, or marketing strategy.
          <br>-Price: FREE
        </p>
        <p data-i18n="modal_free_conclusion">
          <br><br>Note: This consultation is strictly an exploratory meeting. It includes no deliverables or follow-up work unless additional services are subsequently agreed upon.
        </p>
      </div>
    `,
    strategy: `
      <div class="modal-package strategy-package">
        <h4 data-i18n="modal_strategy_title">IT SUPPORT</h4>
        <p data-i18n="modal_strategy_intro">
          Overwhelmed by tech troubles? Our IT Support is tailored to help you navigate complex technical issues and optimize your business operations with precision and reliability.
        </p>
        <p data-i18n="modal_strategy_text">
          <br>One-Hour Session: 
          <br>-Price: 70 SEK per hour
          <br><br>Weekly Option: 
          <br>-Includes: 10 hours
          <br>-Price: 60 SEK per hour
          <br>-Total: 600 SEK
          <br><br>Monthly Option:
          <br>-Includes: 40 hours (10 hours per week)
          <br>-Price: 55 SEK per hour
          <br>-Total: 2200 SEK
        </p>
        <p data-i18n="modal_strategy_conclusion">
          <br>Terms & Conditions: Allocated hours must be utilized within the agreed period, and unused hours will expire. Should a task exceed the planned hours due to unforeseen complexities, no additional charges will be incurred within reasonable limits. This service covers consultation, troubleshooting, and post-service corrections (up to one week for single sessions, one month for weekly, and three months for monthly plans). External issues such as third-party service failures, data loss, or non-related technical complications are not covered.
          <br><br>Notes: Prices are quoted in SEK. Conversion to your local currency will be calculated on the date of payment. A 10% discount applies for both the referral and the referee on weekly and monthly options.
        </p>
      </div>
    `,
    "website-small": `
      <div class="modal-package marketing-package">
        <h4 data-i18n="modal_marketing_title">MARKETING SERVICES</h4>
        <p data-i18n="modal_marketing_intro">
          Need to make your brand stand out? Our Marketing Services provide strategic insights and actionable plans to boost your visibility and drive measurable growth.
        </p>
        <p data-i18n="modal_marketing_text">
          <br>One-Hour Strategy Session:
          <br>-Price: 70 SEK per hour
          <br>-Includes: Discussing marketing decisions and strategy.
          <br><br>Marketing Kickstart Package: 
          <br>-Includes: 6 hours total. A comprehensive brand audit, initial strategy development, and a follow-up review.
          <br>-Price: 60 SEK per hour
          <br>-Total: 360 SEK
          <br><br>Marketing Growth Package:
          <br>-Includes: 20 hours spread over one month, delivering in-depth strategy development and tactical planning
          <br>-Price: 55 SEK per hour
          <br>-Total: 1100 SEK
        </p>
        <p data-i18n="modal_marketing_conclusion">
          <br>Terms & Conditions: The strategies and recommendations provided are based on industry best practices and current data. However, actual results may vary due to market conditions and implementation quality. Any additional work beyond the agreed scope will incur extra fees. External factors that affect campaign success are not within our responsibility.
          <br><br>Notes: Prices are quoted in SEK. Conversion to your local currency will be calculated on the date of payment. A 10% discount applies for both the referral and the referee on all applicable marketing packages.
        </p>
      </div>
    `,
    "website-standard": `
      <div class="modal-package website-package">
        <h4 data-i18n="modal_website_title">WEBSITE DEVELOPMENT</h4>
        <p data-i18n="modal_website_intro">
          Your website is your digital storefront. Our Website Development packages are crafted to give you a professional online presence that is both functional and attractive. Tailored to suit every need, from personal blogs to robust business sites.
        </p>
        <p data-i18n="modal_website_text">
          <br>Small Website Package:
          <br>– Ideal for: Blogs, landing pages, or online CVs.
          <br>– Price Range: 150 – 500 SEK (depending on size and complexity).
          <br>– Delivery Time: 1–5 business days.
          <br>– Inclusions: Custom-coded design using GitHub (HTML, CSS, JS) and one week of post-launch IT support for minor adjustments.
          <br>– Additional: Free hosting via GitHub; custom domain purchase is the client’s responsibility (recommended providers: OVHCloud, Namecheap).
          <br><br>
          Regular Website Package:
          <br>– Ideal for: Small stores, business sites, or larger blogs.
          <br>– Price Range: 1500 – 2000 SEK (depending on features).
          <br>– Delivery Time: 2–3 weeks.
          <br>– Inclusions: Development on platforms such as WordPress or Shopify with drag-and-drop customization, two months of post-launch IT support, and initial assistance with branding and logo concepts.
          <br>– Additional: Some packages include free hosting and a custom domain for up to one year; ongoing subscriptions, plugins, or premium features remain the client’s responsibility.
          <br><br>
          Premium Website Package:
          <br>– Details: Coming Soon!<br><br>
        </p>
        <p data-i18n="modal_website_conclusion">
          <br>Terms & Conditions: A detailed scope of work will be agreed upon prior to project commencement. The packages include only the specified features and support periods. Post-launch support is limited to bug fixes and minor modifications within the stated period. Any additional changes or extended maintenance will be subject to extra fees. We are not liable for delays or issues resulting from third-party platforms, domain registration, or external hosting services. All additional costs (such as domain fees or subscription charges) are the client’s responsibility.
          <br><br>Notes: Prices are quoted in SEK. Conversion to your local currency will be calculated on the date of payment. A 10% discount applies for both the referral and the referee on all applicable packages.
        </p>
      </div>
    `
  };

  pricingOptions.forEach(option => {
    option.addEventListener('click', function() {
      const packageType = option.getAttribute('data-package-details');
      modalDetails.innerHTML = modalContent[packageType] || '<p data-i18n="modal_no_details">No details available.</p>';
      
      if (typeof translatePage === 'function') {
        translatePage();
      }
      
      modalContainer.classList.add('active');
    });
  });

  modalCloseBtn.addEventListener('click', function() {
    modalContainer.classList.remove('active');
  });
  overlay.addEventListener('click', function() {
    modalContainer.classList.remove('active');
  });
});
