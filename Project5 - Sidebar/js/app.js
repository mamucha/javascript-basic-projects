const btnOpen = document.querySelector(".menu__hamburger--open");
const btnClose = document.querySelector(".menu__hamburger--close");
const menu = document.querySelector(".menu");

btnOpen.addEventListener("click", function () {
	menu.style.transform = "translateX(0)";
});

btnClose.addEventListener("click", function () {
	menu.style.transform = "translateX(-100%)";
});
