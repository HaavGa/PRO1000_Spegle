// Disable video on mobile screens

const video = document.getElementById("video");
const img = document.getElementById("img");
const mediaQuery = window.matchMedia("(max-width: 768px)");
myFunction(mediaQuery);
mediaQuery.addEventListener("document", myFunction);

function myFunction(mediaQuery) {
  if (mediaQuery.matches) {
    // If media query matches
    video.remove();
  } else {
    img.remove();
  }
}

// Change language of website

// Create a function to change the hash value of the page
function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

// Define the language reload anchors
const language = {
  en: {
    // Navigation
    navHome: "Home",
    navAbout: "About",
    navContact: "Contact us",
    navBook: "Book now",
    // Index
    indexText:
      "Live close to nature and wildlife in Speglehyttene. Surrounded by mountains, forests and lakes, you can find peace and rest. Take a break from everyday life, and create good memories in these very special cabins with glass walls that reflect the surrounding landscape. Good bed, bathroom and kitchenette. Reserved use of sauna.",
    indexBtn: "Book now",
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
  // Index
  indexText.textContent = language.en.indexText;
  indexBtn.textContent = language.en.indexBtn;
  const all = document.querySelectorAll(".link");
  for (let i = 0, max = all.length; i < max; i++) {
    all[i].href += "#en";
  }
  languageToggle.innerHTML =
    '<img class="flag-dropdown me-1"src="img/flags/en.png"/>English';
}
