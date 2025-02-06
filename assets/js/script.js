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
// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    navigationLinks.forEach(nav => nav.classList.remove("active"));
    this.classList.add("active");

    const targetKey = this.dataset.nav;
    pages.forEach(page => {
      page.classList.toggle("active", page.dataset.page === targetKey);
    });
    window.scrollTo(0, 0);
  });
});

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
  const lang = this.value;
  document.body.classList.add(`lang-${lang}`);
  updateTextElements(lang);
});

const translations = {
  en: {
    nav_about: "About",
    nav_resume: "Resume",
    nav_portfolio: "Portfolio",
    nav_blog: "Blog",
    about_title: "About me",
    about_text: "Hello, I’m Gabriel Stanciu, a passionate Business Administration student at Jönköping International Business School, originally from Romania and now thriving in Sweden.",
    about_text_extra: "As a Freelance IT & Marketing Consultant, I specialize in developing responsive websites on platforms like WordPress, Shopify, and GitHub. Additionally, I also craft marketing strategies that truly make a difference for my clients.",
    about_text_extra2: "I am always aiming to gain knowledge. I’m currently developing skills in SEO, Python, and SQL to broaden my skillset and expand my operations.",
    about_text_extra3: "Curious about my latest venture? Discover the BlankPage project on my blog and learn how I’m merging innovative IT solutions with strategic marketing to help businesses grow.",
    service_title: "What I'm doing",
    resume_title: "Resume",
    download_cv: "Download CV",
    education_title: "Education",
    experience_title: "Experience",
    edu_item1_title: "Jönköping International School of Business – International Management | BS in Business Administration",
    edu_item1_span: "August 2023 — Present",
    edu_item1_text: "Currently pursuing a Bachelor’s degree with a focus on International Management. My coursework covers marketing, finance, entrepreneurship, and management. Highlights include mentoring a student with disabilities and launching BlankPage, a project that fuses academic insight with real-world consulting.",
    edu_item2_title: "“Tudor Vladimirescu” Theoretical High School – Social Science | Humanities Profile",
    edu_item2_span: "September 2018 — June 2022",
    edu_item2_text: "Completed an intensive program in social sciences, including economics, sociology, psychology, and philosophy. Recognized for academic excellence with a Merit Scholarship awarded throughout all four years.",
    exp_item1_title: "Internship Opportunities | Could your company be next on my resume?",
    exp_item1_span: "2025",
    exp_item1_text: "Actively seeking an internship for 2025 to apply my academic and practical experience in international management, IT operations, and digital marketing. I’m eager to contribute fresh ideas to an innovative team.",
    exp_item2_title: "BlankPage | Freelance IT and Marketing Consultant",
    exp_item2_span: "January 2025 — Present",
    exp_item2_text: "Founder of BlankPage, a venture that merges theoretical expertise with practical experience. I provide customized consulting in IT operations, digital marketing strategy, and website development, empowering businesses to excel in today’s competitive e-commerce landscape. Blank today, Limitless tomorrow.",
    exp_item3_title: "Swim GSM SRL | Informal Internship for Website Administration",
    exp_item3_span: "October 2022 – November 2024",
    exp_item3_text: "Over the course of more than two years, I engaged in an informal, part-time internship with Swim GSM SRL to gain in-depth experience in managing e-commerce operations. Although the work schedule was infrequent due to academic commitments, I was responsible for overseeing website administration, coordinating daily online tasks, and contributing to strategic planning.",
    exp_item4_title: "General Business System SRL | Store Clerk",
    exp_item4_span: "October 2022 – July 2023",
    exp_item4_text: "Managed daily retail operations, delivering exceptional customer service, handling inventory, and processing transactions to ensure a seamless shopping experience.",
    exp_item5_title: "Ideal GSM Accesorii SRL | Picker",
    exp_item5_span: "August 2021 – October 2022",
    exp_item5_text: "Optimized order fulfillment by efficiently picking, packing, and preparing shipments. I also assisted with inventory management and maintained warehouse organization, ensuring accuracy and efficiency.",
    portfolio_title: "Portfolio",
    blog_title: "Blog"
  },
  sv: {
    nav_about: "Om mig",
    nav_resume: "CV",
    nav_portfolio: "Portfölj",
    nav_blog: "Blogg",
    about_title: "Om mig",
    about_text: "Hej, jag är Gabriel Stanciu, en passionerad student i företagsekonomi vid Jönköpings internationella handelshögskola, ursprungligen från Rumänien och nu verksam i Sverige.",
    about_text_extra: "Som frilansande IT- och marknadsföringskonsult specialiserar jag mig på att utveckla responsiva webbplatser på plattformar som WordPress, Shopify och GitHub. Dessutom utformar jag marknadsföringsstrategier som verkligen gör skillnad för mina kunder.",
    about_text_extra2: "Jag strävar alltid efter att lära mig mer. Jag utvecklar för närvarande färdigheter inom SEO, Python och SQL för att bredda min kompetens och utöka mina verksamheter.",
    about_text_extra3: "Nyfiken på mitt senaste projekt? Upptäck BlankPage-projektet på min blogg och lär dig hur jag förenar innovativa IT-lösningar med strategisk marknadsföring för att hjälpa företag att växa.",
    service_title: "Vad jag gör",
    resume_title: "CV",
    download_cv: "Ladda ner CV",
    education_title: "Utbildning",
    experience_title: "Erfarenhet",
    edu_item1_title: "Jönköpings internationella handelshögskola – Internationell management | Kandidatexamen i företagsekonomi",
    edu_item1_span: "Augusti 2023 — Pågående",
    edu_item1_text: "För närvarande studerar jag en kandidatexamen med fokus på internationell management. Min kursplan omfattar marknadsföring, finans, entreprenörskap och ledning. Höjdpunkter inkluderar mentorskap med en elev med funktionsnedsättning samt lanseringen av BlankPage, ett projekt som förenar akademisk insikt med praktisk konsultverksamhet.",
    edu_item2_title: "Tudor Vladimirescu Teoretiska Gymnasium – Samhällsvetenskap | Humanistisk profil",
    edu_item2_span: "September 2018 — Juni 2022",
    edu_item2_text: "Avslutade ett intensivt program inom samhällsvetenskap med inriktning på ekonomi, sociologi, psykologi och filosofi. Belönad med ett Merit Scholarship under samtliga fyra år.",
    exp_item1_title: "Praktikmöjligheter | Kan ditt företag bli nästa på mitt CV?",
    exp_item1_span: "2025",
    exp_item1_text: "Söker aktivt en praktikplats för 2025 för att tillämpa min akademiska och praktiska erfarenhet inom internationell management, IT-drift och digital marknadsföring. Jag är ivrig att bidra med nya idéer till ett innovativt team.",
    exp_item2_title: "BlankPage | Frilansande IT- och marknadsföringskonsult",
    exp_item2_span: "Januari 2025 — Pågående",
    exp_item2_text: "Grundare av BlankPage, ett projekt som förenar teoretisk expertis med praktisk erfarenhet. Jag erbjuder skräddarsydd konsultation inom IT-drift, digital marknadsföringsstrategi och webbplatsutveckling, för att hjälpa företag att lyckas i dagens konkurrenskraftiga e-handelslandskap. Blank idag, obegränsat imorgon.",
    exp_item3_title: "Swim GSM SRL | Informell praktik för webbplatsadministration",
    exp_item3_span: "Oktober 2022 – Juli 2024",
    exp_item3_text: "Under mer än två år deltog jag i en informell, deltidspraktik hos Swim GSM SRL för att få djupgående erfarenhet av e-handelsadministration. Trots begränsad arbetstid på grund av studier ansvarade jag för webbplatsadministration, dagliga online-uppgifter och strategisk planering.",
    exp_item4_title: "General Business System SRL | Butiksbiträde",
    exp_item4_span: "Oktober 2022 – Juli 2023",
    exp_item4_text: "Hanterade dagliga butikssysslor med fokus på utmärkt kundservice, lagerhantering och transaktionsbehandling för att säkerställa en smidig kundupplevelse.",
    exp_item5_title: "Ideal GSM Accesorii SRL | Plockare",
    exp_item5_span: "Augusti 2021 – Oktober 2022",
    exp_item5_text: "Effektiviserade orderhantering genom att noggrant plocka, packa och förbereda leveranser. Assisterade även med lagerhantering och säkerställde ordentlig organisation.",
    portfolio_title: "Portfölj",
    blog_title: "Blogg"
  },
  ro: {
    nav_about: "Despre mine",
    nav_resume: "CV",
    nav_portfolio: "Portofoliu",
    nav_blog: "Blog",
    about_title: "Despre mine",
    about_text: "Bună, sunt Gabriel Stanciu, un student pasionat de Administrarea Afacerilor la Jönköpings International Business School, originar din România și acum activ în Suedia.",
    about_text_extra: "Ca și consultant IT și de marketing independent, mă specializez în dezvoltarea de site-uri responsive pe platforme precum WordPress, Shopify și GitHub. De asemenea, elaborez strategii de marketing care fac diferența pentru clienți.",
    about_text_extra2: "Întotdeauna caut să învăț mai mult. Momentan îmi dezvolt abilități în SEO, Python și SQL pentru a-mi extinde cunoștințele și operațiunile.",
    about_text_extra3: "Curios despre ultima mea inițiativă? Descoperă proiectul BlankPage pe blogul meu și află cum combin soluțiile IT inovatoare cu marketingul strategic pentru a ajuta afacerile să crească.",
    service_title: "Ce fac",
    resume_title: "CV",
    download_cv: "Descarcă CV",
    education_title: "Educație",
    experience_title: "Experiență",
    edu_item1_title: "Jönköpings International Business School – Management Internațional | Licență în Administrarea Afacerilor",
    edu_item1_span: "August 2023 — În curs",
    edu_item1_text: "În prezent urmez o licență cu focus pe management internațional. Cursurile mele includ marketing, finanțe, antreprenoriat și management. Printre realizări se numără mentoratul unui student cu dizabilități și lansarea proiectului BlankPage, care îmbină cunoștințele academice cu experiența practică.",
    edu_item2_title: "Liceul Teoretic Tudor Vladimirescu – Științe sociale | Profil umanist",
    edu_item2_span: "Septembrie 2018 — Iunie 2022",
    edu_item2_text: "Am absolvit un program intensiv în științe sociale, incluzând economie, sociologie, psihologie și filosofie. Am fost distins cu un Merit Scholarship pe parcursul tuturor anilor.",
    exp_item1_title: "Oportunități de internship | Poate compania ta să fie următoarea pe CV-ul meu?",
    exp_item1_span: "2025",
    exp_item1_text: "Caut activ un internship pentru 2025 pentru a aplica experiența mea academică și practică în management internațional, operațiuni IT și marketing digital. Sunt dornic să aduc idei noi într-o echipă inovatoare.",
    exp_item2_title: "BlankPage | Consultant IT și de marketing independent",
    exp_item2_span: "Ianuarie 2025 — În curs",
    exp_item2_text: "Fondator al BlankPage, un proiect care îmbină expertiza teoretică cu experiența practică. Ofer consultanță personalizată în operațiuni IT, strategie de marketing digital și dezvoltare web, ajutând afacerile să exceleze în peisajul competitiv de e-commerce. Blank astăzi, nelimitat mâine.",
    exp_item3_title: "Swim GSM SRL | Internship informal pentru administrare web",
    exp_item3_span: "Octombrie 2022 – Noiembrie 2024",
    exp_item3_text: "Pe parcursul a peste doi ani, am efectuat un internship informal, part-time, la Swim GSM SRL pentru a câștiga experiență în administrarea operațiunilor e-commerce. Deși programul a fost redus din cauza studiilor, am fost responsabil de administrarea site-ului, coordonarea sarcinilor zilnice online și contribuția la planificarea strategică.",
    exp_item4_title: "General Business System SRL | Casier",
    exp_item4_span: "Octombrie 2022 – Iulie 2023",
    exp_item4_text: "Am gestionat operațiunile zilnice ale magazinului, oferind servicii excelente clienților, gestionând inventarul și procesând tranzacții pentru o experiență fără cusur.",
    exp_item5_title: "Ideal GSM Accesorii SRL | Plocker",
    exp_item5_span: "August 2021 – Octombrie 2022",
    exp_item5_text: "Am optimizat procesul de pregătire a comenzilor prin plucirea, ambalarea și pregătirea expedierilor. De asemenea, am asigurat gestionarea corectă a inventarului și organizarea depozitului.",
    portfolio_title: "Portofoliu",
    blog_title: "Blog"
  }
};

function updateTextElements(lang) {
  document.querySelectorAll("[data-translate-key]").forEach((el) => {
    const key = el.getAttribute("data-translate-key");
    if (translations[lang] && translations[lang][key]) {\n      el.textContent = translations[lang][key];
    }
  });
}

// Language dropdown listener
const languageSelect = document.getElementById("language-select");
languageSelect.addEventListener("change", function () {
  const lang = languageSelect.value;
  // Set language class on body for CSS overrides
  document.body.className = `lang-${lang}`;
  updateTextElements(lang);
});

// Initialize translations on page load (default language)
updateTextElements(languageSelect.value || "en");


