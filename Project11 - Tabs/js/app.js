const btnTabs = document.querySelectorAll(".btn__box");
const tabText = document.querySelectorAll(".tab__text");

btnTabs.forEach(function (btn) {
	btn.addEventListener("click", function (e) {
		btnTabs.forEach((el) => el.classList.remove("btn__box--active"));

		tabText.forEach(function (elementTab) {
			if (
				elementTab.getAttribute("data-id") === e.target.getAttribute("data-id")
			) {
				elementTab.classList.add("tab__text--active");
				e.target.classList.add("btn__box--active");
			} else {
				elementTab.classList.remove("tab__text--active");
			}
		});
	});
});
