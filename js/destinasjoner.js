// Change language of website

// Create a function to change the hash value of the page
function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

// Define the language reload anchors
let language = {
  en: {
    // Navigation
    navHome: "Home",
    navDestinations: "Destinations",
    navAllDestinations: "All destinations",
    navAbout: "About",
    navContact: "Contact us",
    // Destinations
    destHeader: "Destinations",
    destOfteTxt:
      "Was drawing natural fat respect husband. An as noisy an offer drawn blush place. These tried for way joy wrote witty. In mr began music weeks after at begin. Education no dejection so direction pretended household do to. Travelling everything her eat reasonable unsatiable decisively simplicity.",
    destOfteTxtSm: "County, municipality",
    dest2: "Destination 2",
    dest2Txt:
      "Ferrars all spirits his imagine effects amongst neither. It bachelor cheerful of mistaken. Tore has sons put upon wife use bred seen. Its dissimilar invitation ten has discretion unreserved. Had you him humoured jointure ask expenses learning. Blush on in jokes sense do do. Brother hundred he assured reached on up no.",
    dest2TxtSm: "County, municipality",
  },
};

// Check if a hash value exists in the URL
if (window.location.hash) {
  // Set the content of the webpage
  // depending on the hash value
}
// if (window.location.hash == '#no') {
//   // Navigation
//   navHome.textContent = language.no.navHome;
//   navDestinations.textContent = language.no.navDestinations;
//   navAllDestinations.textContent = language.no.navAllDestinations;
//   navAbout.textContent = language.no.navAbout;
//   navContact.textContent = language.no.navContact;
//   // Index
//   indexHeader.textContent = language.no.indexHeader;
//   indexText.textContent = language.no.indexText;
//   indexBtn.textContent = language.no.indexBtn;
if (window.location.hash == "#en") {
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
  // Destinations
  destHeader.textContent = language.en.destHeader;
  destOfteTxt.textContent = language.en.destOfteTxt;
  destOfteTxtSm.textContent = language.en.destOfteTxtSm;
  dest2.textContent = language.en.dest2;
  dest2Txt.textContent = language.en.dest2Txt;
  dest2TxtSm.textContent = language.en.dest2TxtSm;
}
