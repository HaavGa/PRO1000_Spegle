// Disable video on mobile screens

const video = document.getElementById('video');
const img = document.getElementById('img');
const mediaQuery = window.matchMedia('(max-width: 768px)');
myFunction(mediaQuery);
mediaQuery.addEventListener('document', myFunction);

function myFunction(mediaQuery) {
  if (mediaQuery.matches) {
    // If media query matches
    video.remove();
  } else {
    img.remove();
  }
}

// Change language of website

// Create a function to change
// the hash value of the page
function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

// Define the language reload anchors
const language = {
  en: {
    // Navigation
    navHome: 'Home',
    navDestinations: 'Destinations',
    navAllDestinations: 'All destinations',
    navAbout: 'About',
    navContact: 'Contact us',
    // Index
    indexHeader: 'This is some English text',
    indexText:
      'Prevailed sincerity behaviour to so do principle mr. As departure at no propriety zealously my. On dear rent if girl view. First on smart there he sense. Earnestly enjoyment her you resources. Brother chamber ten old against. Mr be cottage so related minuter is.',
    indexBtn: 'Book now',
  },
};

// Check if a hash value exists in the URL
if (window.location.hash) {
  // Set the content of the webpage
  // depending on the hash value
}
if (window.location.hash == '#no') {
  // Navigation
  navHome.textContent = language.no.navHome;
  navDestinations.textContent = language.no.navDestinations;
  navAllDestinations.textContent = language.no.navAllDestinations;
  navAbout.textContent = language.no.navAbout;
  navContact.textContent = language.no.navContact;
  // Index
  indexHeader.textContent = language.no.indexHeader;
  indexText.textContent = language.no.indexText;
  indexBtn.textContent = language.no.indexBtn;
} else if (window.location.hash == '#en') {
  // Navigation
  navHome.textContent = language.en.navHome;
  navDestinations.textContent = language.en.navDestinations;
  navAllDestinations.textContent = language.en.navAllDestinations;
  navAbout.textContent = language.en.navAbout;
  navContact.textContent = language.en.navContact;
  // Index
  indexHeader.textContent = language.en.indexHeader;
  indexText.textContent = language.en.indexText;
  indexBtn.textContent = language.en.indexBtn;
}
