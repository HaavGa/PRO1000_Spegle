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
    contactUsHeader: "Contact us",
    phone: "Phone",
    openingHours: "Opening hours: Monday - Friday",
    email: "Email",
    tel1: "(+47) 918 583 79",
    tel2: "(+47) 466 76 721",
    // questions
    q1: "Where is Spegle Hyllandsfoss?",
    q2: "How do you order and pay?",
    q3: "When and how can you check in?",
    q4: "When can you check out?",
    q5: "Is it allowed to smoke in the cabins?",
    q6: "Are dogs allowed?",
    q7: "Are you allowed to light up a campfire?",
    q8: "Are there sheets and towels in the cabins?",
    q9: "Can you fish in Hylen?",
    // answers
    a1: "Spegle Hyllandsfoss is located 2 km from the municipal center Åmot in Vinje municipality, in the direction of Rauland.",
    a2: "You order on our website Spegle and pay with Visa, Mastercard, American Express or Vipps.",
    a3: "We have no reception and you check in yourself. Check in camper and tents are 11-23. Use designated places. The cabins are ready from 15 o'clock. Once you have booked the cabin on the website, you will receive an email with the appropriate information.",
    a4: "Check-out needs to happen before 12",
    a5: "Of course not!",
    a6: "It is allowed to bring a dog in the cabins Gunhildstoga, Rennestoga, Jase and Rupehytta. Please make sure that the dog does not wander in furniture and beds. The dog must always be kept on a leash. Remember to bring dog bags.",
    a7: "You can only use adapted campfire sites. See signs at the location.",
    a8: "There are sheets and towels in Speglehytta and Konglevirvel. In in the other cabins you can rent bedding for 70 NOK and towel for 30 NOK.",
    a9: "Yes, you can fish for free with a rod when you visit Hyllandsfoss.",
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
  contactUsHeader.textContent = language.en.contactUsHeader;
  phone.textContent = language.en.phone;
  openingHours.textContent = language.en.openingHours;
  email.textContent = language.en.email;
  tel1.textContent = language.en.tel1;
  tel2.textContent = language.en.tel2;
  // questions
  q1.textContent = language.en.q1;
  q2.textContent = language.en.q2;
  q3.textContent = language.en.q3;
  q4.textContent = language.en.q4;
  q5.textContent = language.en.q5;
  q6.textContent = language.en.q6;
  q7.textContent = language.en.q7;
  q8.textContent = language.en.q8;
  q9.textContent = language.en.q9;
  // answers
  a1.textContent = language.en.a1;
  a2.textContent = language.en.a2;
  a3.textContent = language.en.a3;
  a4.textContent = language.en.a4;
  a5.textContent = language.en.a5;
  a6.textContent = language.en.a6;
  a7.textContent = language.en.a7;
  a8.textContent = language.en.a8;
  a9.textContent = language.en.a9;

  // function
  const all = document.querySelectorAll(".link");
  for (let i = 0, max = all.length; i < max; i++) {
    all[i].href += "#en";
  }
  languageToggle.innerHTML =
    '<img class="flag-dropdown me-1"src="/img/flags/en.png"/>English';
}
