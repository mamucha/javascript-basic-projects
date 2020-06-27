const btn = document.querySelector(".main__button");
const switchBtn = document.querySelector(".button__switch");
const video = document.querySelector("video");

btn.addEventListener("click", function () {
	if (!switchBtn.classList.contains("switch__toogle")) {
		video.pause();
		switchBtn.classList.add("switch__toogle");
	} else {
		video.play();
		switchBtn.classList.remove("switch__toogle");
	}
});
