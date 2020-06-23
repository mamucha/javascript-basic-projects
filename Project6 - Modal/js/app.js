const openModal = document.querySelector(".main__button");
const mainModal = document.querySelector(".main");
const mainModalWrapper = document.querySelector(".main__wrapper");
const contentModal = document.querySelector(".modal");

openModal.addEventListener("click", function () {
	mainModalWrapper.style.opacity = "0";
	contentModal.classList.add("modal__visibility");
	mainModal.style.filter = "blur(20px)";

	document
		.querySelector(".modal__close")
		.addEventListener("click", function () {
			contentModal.classList.remove("modal__visibility");
			mainModalWrapper.style.opacity = "1";
			mainModal.style.filter = "blur(0px)";
		});
});
