const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    toTop.classList.add("scroll");
  } else {
    toTop.classList.remove("scroll");
  }
});
