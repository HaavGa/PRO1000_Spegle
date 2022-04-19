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
  },
};
if (window.location.hash) {
  // Set the content of the webpage
  // depending on the hash value
}
if (window.location.hash == "#en") {
  // Navigation
  hyllTitle.textContent = language.en.hyllTitle;
  hyllText.textContent = language.en.hyllText;
}
