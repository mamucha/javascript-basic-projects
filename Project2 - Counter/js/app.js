const btnDec = document.getElementById("dec");
const btnReset = document.getElementById("reset");
const btnInc = document.getElementById("inc");

const mainCount = document.querySelector(".main__count");

const decrease = () => {
	mainCount.classList.remove("decrase", "increase");
	mainCount.textContent--;
	mainCount.offsetWidth;
	mainCount.classList.add("decrase");
	colorCount();
};

const increase = () => {
	mainCount.classList.remove("increase", "decrase");
	mainCount.textContent++;
	mainCount.offsetWidth;
	mainCount.classList.add("increase");
	colorCount();
};

const resetCount = () => {
	mainCount.textContent = "0";
	colorCount();
};

const colorCount = () => {
	if (mainCount.textContent * 1 < 0) {
		mainCount.style.color = "red";
	} else if (mainCount.textContent * 1 > 0) {
		mainCount.style.color = "green";
	} else {
		mainCount.style.color = "black";
	}
};

document.onkeydown = function (e) {
	switch (e.keyCode) {
		case 37:
			decrease();
			break;
		case 39:
			increase();
			break;
		case 32:
			resetCount();
			break;
	}
};

btnDec.addEventListener("click", decrease);
btnInc.addEventListener("click", increase);
btnReset.addEventListener("click", resetCount);
