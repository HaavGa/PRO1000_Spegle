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
    // Error
    errorTitle: "This cabin is under construction!",
    errorSub:
      "Oops, not much to see here! The cabin you're looking for is currently not available. Follow us on our socials for updates!",
    errorBtn: "Return",
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
  // error
  errorTitle.textContent = language.en.errorTitle;
  errorSub.textContent = language.en.errorSub;
  errorBtn.textContent = language.en.errorBtn;

  const all = document.querySelectorAll(".link");
  for (let i = 0, max = all.length; i < max; i++) {
    all[i].href += "#en";
  }
  languageToggle.innerHTML =
    '<img class="flag-dropdown me-1"src="/img/flags/en.png"/>English';
}
