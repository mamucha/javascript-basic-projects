const btnMenu = document.querySelector(".menu__hamburger");
const scrollValue = window.scrollY;
let menu = document.querySelector(".menu");
const menuHeight = menu.getBoundingClientRect().height;

btnMenu.addEventListener("click", function () {
	document.querySelector(".menu__list").classList.toggle("menu__list--open");
});

window.addEventListener("scroll", function () {
	const scrollValue = window.scrollY;
	const homeHeight = document.getElementById("home").getBoundingClientRect()
		.height;
	const backUp = document.querySelector(".backUp");
	if (scrollValue > menuHeight) {
		menu.classList.add("menu--fixed");
	} else {
		menu.classList.remove("menu--fixed");
	}

	if (scrollValue > homeHeight / 2) {
		backUp.style.display = "flex";
	} else {
		backUp.style.display = "none";
	}
});

const scrollMenu = document.querySelectorAll(".scroll");
scrollMenu.forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault();

		const idMenu = e.currentTarget.getAttribute("href").slice(1);
		const sectionId = document.getElementById(idMenu);
		let position = sectionId.offsetTop - menuHeight;

		if (!menu.classList.contains("menu--fixed") && window.innerWidth < 800) {
			position = position - menuHeight - 200;
		} else if (!menu.classList.contains("menu--fixed")) {
			position = position - menuHeight;
		}

		window.scrollTo({
			left: 0,
			top: position,
			behavior: "smooth",
		});

		if (
			document
				.querySelector(".menu__list")
				.classList.contains("menu__list--open")
		) {
			document
				.querySelector(".menu__list")
				.classList.remove("menu__list--open");
		}
	});
});
