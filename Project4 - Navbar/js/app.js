const btnToogle = document.querySelector(".menu__hamburger");
const menuList = document.querySelector(".menu__list");

btnToogle.addEventListener("click", function () {
	menuList.classList.toggle("menu__list--open");
});
