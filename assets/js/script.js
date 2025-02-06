'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
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

    let selectedValue = this.innerText.toLowerCase();
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

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
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

// --- Certifications Modal Functionality ---
// Attach event listeners to certifications items.
document.querySelectorAll('.certifications-item').forEach(item => {
  item.addEventListener('click', function () {
    // Get the PDF file name from a data attribute on the certification item.
    const file = this.getAttribute('data-certification-file');
    const modal = document.querySelector('.certifications-modal');
    // Set the modal title to the certification's title text.
    modal.querySelector('[data-modal-title]').textContent = this.querySelector('.testimonials-item-title').textContent;
    // Set the iframe src to load the PDF from your assets.
    modal.querySelector('[data-modal-iframe]').setAttribute('src', './assets/files/' + file);
    modal.classList.add('active');
  });
});

// Close the modal when the close button is clicked.
document.querySelectorAll('.modal-close-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const modal = this.closest('.modal-container');
    modal.classList.remove('active');
    modal.querySelector('[data-modal-iframe]').setAttribute('src', '');
  });
});


 /* Language settings */
  document.getElementById('language-select').addEventListener('change', function() {
    document.body.classList.remove('lang-en', 'lang-sv', 'lang-ro');
    var lang = this.value;
    if(lang === 'en') {
      document.body.classList.add('lang-en');
    } else if(lang === 'sv') {
      document.body.classList.add('lang-sv');
    } else if(lang === 'ro') {
      document.body.classList.add('lang-ro');
    }
  });

// When a blog post is clicked...
document.querySelectorAll('.blog-post-item a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    // Retrieve data attributes from the clicked link:
    var imgSrc = link.getAttribute('data-img');
    var title = link.getAttribute('data-title');
    var body = link.getAttribute('data-body');
    // Populate the modal with the data:
    document.getElementById('blog-modal-img').src = imgSrc;
    document.getElementById('blog-modal-title').innerText = title;
    document.getElementById('blog-modal-body').innerHTML = body;
    // Show the modal:
    document.getElementById('blog-modal').classList.remove('hidden');
  });
});
// Close modal on clicking the close button:
document.getElementById('blog-modal-close').addEventListener('click', function() {
  document.getElementById('blog-modal').classList.add('hidden');
});
// Optional: close modal when clicking outside the content area:
document.getElementById('blog-modal').addEventListener('click', function(e) {
  if (e.target === this) {
    this.classList.add('hidden');
  }
});
