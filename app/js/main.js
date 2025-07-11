//get elements
const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const mobileMenu = document.getElementById("mobileMenu");
const mobileOverlay = document.getElementById("mobileOverlay");
const body = document.querySelector("body");
const closeBtn = document.querySelector(".close-btn");

//open mobile-menu by clicking hamburger btn
menuOpen.addEventListener("click", function () {
  mobileMenu.classList.remove("translate-x-full");
  mobileMenu.classList.remove("invisible");
  mobileOverlay.classList.remove("hidden");
  body.style.overflowY = "hidden";
  closeBtn.style.display = "block";
});

//close menu by clicking close btn
menuClose.addEventListener("click", function () {
  mobileMenu.classList.add("translate-x-full");
  mobileMenu.classList.add("invisible");
  mobileOverlay.classList.add("hidden");
  body.style.overflowY = "auto";
  closeBtn.style.display = "none";
});

//close mobile Menu by clicking outside of it
mobileOverlay.addEventListener("click", (event) => {
  if (event.target === mobileOverlay) {
    mobileOverlay.classList.add("hidden");
    mobileMenu.classList.add("invisible");
    mobileMenu.classList.add("translate-x-full");
    body.style.overflowY = "auto";
  }
});
