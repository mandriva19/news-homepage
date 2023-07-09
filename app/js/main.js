const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const mobileMenu = document.getElementById("mobileMenu");
const mobileOverlay = document.getElementById("mobileOverlay");

//open mobile-menu by clicking hamburger btn
menuOpen.addEventListener("click", function () {
  mobileMenu.classList.remove("translate-x-full");
  mobileOverlay.classList.remove("hidden");
});

//close menu by clicking close btn
menuClose.addEventListener("click", function () {
  mobileMenu.classList.add("translate-x-full");
  mobileOverlay.classList.add("hidden");
});
