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
    // Hytte1
    facilities1: "Facilities",
    beds1: "2 beds",
    bathroom1: "1 bathroom",
    guests1: "Maximum 4 guests",
    pets1: "No pets",
    electricity1: "Electricity",
    smoking1: "No smoking",
    book1: "Find a date, and book whenever you're ready",
    from1: "From",
    to1: "To",
    bookBtn1: "Book now",
    descHeader1: "Description",
    veibeskrivelse: "Directions",
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
  // om oss
  facilities1.textContent = language.en.facilities1;
  beds1.textContent = language.en.beds1;
  bathroom1.textContent = language.en.bathroom1;
  guests1.textContent = language.en.guests1;
  pets1.textContent = language.en.pets1;
  electricity1.textContent = language.en.electricity1;
  smoking1.textContent = language.en.smoking1;
  book1.textContent = language.en.book1;
  from1.textContent = language.en.from1;
  to1.textContent = language.en.to1;
  bookBtn1.textContent = language.en.bookBtn1;
  descHeader1.textContent = language.en.descHeader1;
  veibeskrivelse.textContent = language.en.veibeskrivelse;

  // Function
  const all = document.querySelectorAll(".link");
  for (let i = 0, max = all.length; i < max; i++) {
    all[i].href += "#en";
  }
  languageToggle.innerHTML =
    '<img class="flag-dropdown me-1"src="img/flags/en.png"/>English';
}
