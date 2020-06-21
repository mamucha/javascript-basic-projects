const simpleColor = document.getElementById("simple");
const hexColor = document.getElementById("hex");
const btn = document.querySelector(".main__button");
const mainColor = document.querySelector(".main__color");

const simpleColorArr = [
	"red",
	"yellow",
	"green",
	"orange",
	"rgb(102, 128, 109)",
	"rgb(39, 30, 94)",
	"rgb(219, 132, 155)",
];
const hexColorArr = [
	0,
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
];

simpleColor.addEventListener("click", function () {
	btn.setAttribute("data-value", "simple");
});

hexColor.addEventListener("click", function () {
	btn.setAttribute("data-value", "hex");
});

btn.addEventListener("click", function (e) {
	if (this.dataset.value === "simple") {
		simpleColorRandom();
	} else if (this.dataset.value === "hex") {
		hexColorRandom();
	} else {
		alert("Please chosee Simple or Hex generate Colors");
	}
});

function simpleColorRandom() {
	let randomColor = Math.floor(Math.random() * simpleColorArr.length);
	document.body.style.backgroundColor = simpleColorArr[randomColor];
	mainColor.textContent = simpleColorArr[randomColor];
}

function hexColorRandom() {
	let randomColor = "#";
	for (let i = 0; i < 6; i++) {
		randomColor += hexColorArr[Math.floor(Math.random() * hexColorArr.length)];
	}
	document.body.style.backgroundColor = randomColor;
	mainColor.textContent = randomColor;
}
