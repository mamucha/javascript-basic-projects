const btn = document.querySelectorAll(".question__button");

const questions = document.querySelectorAll(".question");

btn.forEach(function (elem) {
	elem.addEventListener("click", function () {
		if (
			document.querySelector(".question__answer--open") &&
			document.querySelector(".hide")
		) {
			document
				.querySelector(".question__answer--open")
				.classList.toggle("question__answer--open");
			document.querySelector(".hide").classList.toggle("hide");
		}

		this.parentElement.nextElementSibling.classList.toggle(
			"question__answer--open"
		);

		this.children[0].classList.toggle("hide");
	});
});

// all div open. not hide
// btn.forEach((el) =>
// 	el.addEventListener("click", function () {
//
// 		this.parentElement.nextElementSibling.classList.toggle(
// 			"question__answer--open"
// 		);
// 	})
// );
