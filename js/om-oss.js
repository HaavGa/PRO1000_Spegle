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
    // Om oss
    aboutHeader: "About us",
    aboutSub: "Welcome to an adventure in Telemark!",
    t1: "siblings of five",
    t2: "heads with many ideas",
    t3: "pairs of hands who likes to create",
    t4: "pairs of eyes for good design",
    t5: "hearts for good experiences",
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
  aboutHeader.textContent = language.en.aboutHeader;
  aboutSub.textContent = language.en.aboutSub;
  t1.textContent = language.en.t1;
  t2.textContent = language.en.t2;
  t3.textContent = language.en.t3;
  t4.textContent = language.en.t4;
  t5.textContent = language.en.t5;

  const all = document.querySelectorAll(".link");
  for (let i = 0, max = all.length; i < max; i++) {
    all[i].href += "#en";
  }
  languageToggle.innerHTML =
    '<img class="flag-dropdown me-1"src="img/flags/en.png"/>English';
}
