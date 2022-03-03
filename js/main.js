const video = document.getElementById("video");
const img = document.getElementById("img");
const mediaQuery = window.matchMedia("(max-width: 768px)");
myFunction(mediaQuery);
mediaQuery.addListener(myFunction);

function myFunction(mediaQuery) {
  if (mediaQuery.matches) {
    // If media query matches
    video.remove();
  } else {
    img.remove();
  }
}
