function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

const language = {
  en: {
    // Navigation
    navHome: "Home",
    navAbout: "About",
    navContact: "Contact us",
    navBook: "Book now",
    // kontakt oss
    faqScroll: "Frequently asked questions",
    contactScroll: "Contact us",
    faqHeader: "Frequently asked questions",
    q1: "Question 1",
    contactUsHeader: "Contact us",
    phone: "Phone",
    openingHours: "Opening hours: Monday - Friday",
    email: "Email",
  },
};

const languageToggle = document.getElementById("language-toggle");
// Check if a hash value exists in the URL
if (window.location.hash) {
  // Set the content of the webpage
  // depending on the hash value
}
if (window.location.hash == "#en") {
  // Navigation
  navHome.textContent = language.en.navHome;
  navAbout.textContent = language.en.navAbout;
  navContact.textContent = language.en.navContact;
  navBook.textContent = language.en.navBook;
  // kontakt oss
  faqHeader.textContent = language.en.faqHeader;
  faqScroll.textContent = language.en.faqScroll;
  contactScroll.textContent = language.en.contactScroll;
  q1.textContent = language.en.q1;
  contactUsHeader.textContent = language.en.contactUsHeader;
  phone.textContent = language.en.phone;
  openingHours.textContent = language.en.openingHours;
  email.textContent = language.en.email;
  // function
  const all = document.querySelectorAll(".link");
  for (let i = 0, max = all.length; i < max; i++) {
    all[i].href += "#en";
  }
  languageToggle.innerHTML =
    '<img class="flag-dropdown me-1"src="/img/flags/en.png"/>English';
}
