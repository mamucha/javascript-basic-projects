const btnMenu = document.querySelectorAll(".btn__filter");
const menuBox = [...document.querySelectorAll(".menu__item")];

btnMenu.forEach(function (element) {
	element.addEventListener("click", function () {
		console.log(this.dataset.id);

		menuBox.filter((el) =>
			el.dataset.category != this.dataset.id && this.dataset.id != "all"
				? el.classList.add("hide")
				: el.classList.remove("hide")
		);
	});
});
