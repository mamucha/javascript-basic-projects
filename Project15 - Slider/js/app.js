const sliderBox = document.querySelectorAll(".slider__box");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let position = 0;

sliderBox.forEach(function (slide, index) {
	slide.style.left = `${index * 100}%`;
	slide.style.transform = `translateX(-${position * 100}%)`;
});

const carousel = () => {
	sliderBox.forEach((slide) =>
		position < 4
			? (slide.style.transform = `translateX(-${position * 100}%)`)
			: (slide.style.transform = `translateX(-${0}%)`)
	);
};

const prev = () => {
	if (position == 0) {
		position = 4;
	}
	position--;
	carousel();
};

const next = () => {
	if (position == 4) {
		position = 0;
	}

	position++;
	carousel();
};

document.onkeydown = function (e) {
	switch (e.keyCode) {
		case 37:
			prev();
			break;
		case 39:
			next();
			break;
	}
};

nextBtn.addEventListener("click", next);

prevBtn.addEventListener("click", prev);
