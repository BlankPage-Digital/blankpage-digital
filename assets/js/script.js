'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables (unchanged)
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");

// Updated modal selectors: select all modal containers, close buttons, overlays, and images
const modalContainers = document.querySelectorAll("[data-modal-container]");
const modalCloseBtns = document.querySelectorAll("[data-modal-close-btn]");
const overlays = document.querySelectorAll("[data-overlay]");
const modalImgs = document.querySelectorAll("[data-modal-img]");
// (Optional: if you need modal titles and texts, uncomment these)
// const modalTitles = document.querySelectorAll("[data-modal-title]");
// const modalTexts = document.querySelectorAll("[data-modal-text]");

// add click event to all testimonial items
testimonialsItem.forEach((item, index) => {
  item.addEventListener("click", function () {
    // Update the modal image from the clicked testimonial
    modalImgs[index].src = this.querySelector("[data-testimonials-avatar]").src;
    modalImgs[index].alt = this.querySelector("[data-testimonials-avatar]").alt;
    // Show the corresponding modal and overlay
    modalContainers[index].classList.add("active");
    overlays[index].classList.add("active");
  });
});

// add click event to all modal close buttons
modalCloseBtns.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    modalContainers[index].classList.remove("active");
    overlays[index].classList.remove("active");
  });
});

// add click event to all overlays
overlays.forEach((ovr, index) => {
  ovr.addEventListener("click", function () {
    modalContainers[index].classList.remove("active");
    overlays[index].classList.remove("active");
  });
});

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.dataset.category;
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all" || selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.dataset.category;
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    const navKey = this.getAttribute('data-i18n');
    
    for (let i = 0; i < pages.length; i++) {
      if (navKey === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}
