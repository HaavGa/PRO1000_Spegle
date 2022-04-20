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
    // Hyllandsfoss
    hyllTitle: "Welcome to Hyllandsfoss",
    hyllText:
      "Welcome to Spegle Hyllandsfoss in the heart of Telemark.With Hyllandshylen and Hyllandsfossen as the nearest neighbors, the place is idyllic and peaceful. The waterfall is normally regulated, but when the lake is towed from Totak and down the watercourse, it is a spectacular sight. The place is an excellent starting point for all experiences within outdoor life, culture, local food and sports activities in the area. You can also use the bathing boat Fløtarhuset, which also has glass walls that reflect the surrounding landscape There are nice hiking trails near the place, and you can fish for free with a rod in Hylen. In winter, there are ski runs in the woods right behind the cabins. No reception, but digital check-in.",
    navCabins: "Cabins",
    navActivities: "Activities",
    navDirections: "Directions",
    cabinsHeader: "Cabins",
    ActivitiesHeader: "Activities",
    directionsHeader: "Directions",
    hyllSpegleText:
      "Hotel rooms in nature Glass walls, which reflect nature, and give you the feeling of being outside" +
      "<br>" +
      "Good bed, bathroom and kitchenette" +
      "<br>" +
      "Reserved time in the sauna Fløtarhuset",
    hyllAasmund:
      "Simple cottage high above the ground, with good bed and star views. Shared sanitary facilities and kitchen",
    hyllKongle:
      "Hanging from the tree, you get the galley asleep. Small bedroom for two. Shared sanitary facilities and kitchen",
    hyllRenne:
      "Old historic timber that was used for heating by the floats in Hyllandsfossen over a hundred years ago. 2 beds. Common sanitary facilities and kitchen",
    hyllIvi:
      "Log house from the 17th century from the farm Drotning in Vinje. 2 bedrooms and 6 beds. Common sanitary facilities and kitchen",
    hyllGunhild:
      "Cabin with 2 bedrooms and attic, with 6 beds. Kitchen with dishwasher, bathroom and stove with TV.",
    hyllEivind:
      "Cabin with 2 bedrooms and loft, with 6 beds. Kitchen with dishwasher, bathroom and stove with TV.",
    hyllTømmer:
      "<ul>" +
      "<li>" +
      "One room with doublebed" +
      "</li>" +
      "<li>" +
      "Shared sanitary facilities and kitchen" +
      "</li>" +
      "<li>" +
      "Space for 35 housing units (Recreational vehicle / caravan / tent)" +
      "</li>" +
      "<li>" +
      "Power outlet for 20 units (Recreational vehicle / caravan)" +
      "</li>" +
      "<li>" +
      "New modern sanitary facilities, equipped with a accessible toilet, are ready for use by all our guests. There is also a laundry room and kitchen." +
      "</li>" +
      "<li>" +
      "Linen for rent (Standard in Speglehytta)" +
      "</li>" +
      "</ul>",
    RM1: "Read more",
    RM2: "Read more",
    RM3: "Read more",
    RM4: "Read more",
    RM5: "Read more",
    RM6: "Read more",
    RM7: "Read more",
    RM8: "Read more",
    hyllCabinHeader: "Cabins",
    hyllActivitiesHeader: "Activities/attractions",
    hyllDirectionsHeader: "Directions",
  },
};
const languageToggle = document.getElementById("language-toggle");
if (window.location.hash) {
  // Set the content of the webpage
  // depending on the hash value
}
if (window.location.hash == "#en") {
  // Navigation
  navHome.textContent = language.en.navHome;
  navAbout.textContent = language.en.navAbout;
  navContact.textContent = language.en.navContact;
  // Hyllandsfoss
  hyllTitle.textContent = language.en.hyllTitle;
  hyllText.textContent = language.en.hyllText;
  navCabins.textContent = language.en.navCabins;
  navActivities.textContent = language.en.navActivities;
  navDirections.textContent = language.en.navDirections;
  // Cabins
  hyllSpegleText.innerHTML = language.en.hyllSpegleText;
  hyllAasmund.textContent = language.en.hyllAasmund;
  hyllKongle.textContent = language.en.hyllKongle;
  hyllRenne.textContent = language.en.hyllRenne;
  hyllIvi.textContent = language.en.hyllIvi;
  hyllGunhild.textContent = language.en.hyllGunhild;
  hyllEivind.textContent = language.en.hyllEivind;
  hyllTømmer.innerHTML = language.en.hyllTømmer;
  RM1.textContent = language.en.RM1;
  RM2.textContent = language.en.RM2;
  RM3.textContent = language.en.RM3;
  RM4.textContent = language.en.RM4;
  RM5.textContent = language.en.RM5;
  RM6.textContent = language.en.RM6;
  RM7.textContent = language.en.RM7;
  RM8.textContent = language.en.RM8;
  hyllCabinHeader.textContent = language.en.hyllCabinHeader;
  hyllActivitiesHeader.textContent = language.en.hyllActivitiesHeader;
  hyllDirectionsHeader.textContent = language.en.hyllDirectionsHeader;

  // Change language
  const all = document.querySelectorAll(".link");
  for (let i = 0, max = all.length; i < max; i++) {
    all[i].href += "#en";
  }
  languageToggle.innerHTML =
    '<img class="flag-dropdown me-1"src="/img/flags/en.png"/>English';
}
