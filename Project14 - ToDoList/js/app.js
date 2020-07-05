const formList = document.querySelector(".form__list");
const inputValue = document.querySelector("#list");
const itemList = document.querySelector(".item__list");
const itemEdit = document.querySelector(".item__edit");
const itemDelete = document.querySelector(".item__delete");
const itemClearBtn = document.querySelector(".item__clear");
const alertText = document.querySelector(".main__title h3");

let editFlag = false;
let editElement;

const infoTask = (text, item, action) => {
	alertText.style.display = "block";
	alertText.textContent = `${text} ${item}`;

	setTimeout(() => {
		alertText.style.display = "none";
	}, 1000);
};

const clearTask = () => {
	document.querySelectorAll(".item__wrapper").forEach((el) => el.remove());
	itemClearBtn.style.display = "none";
};

const editTask = (e) => {
	editFlag = true;
	inputValue.value =
		e.target.parentElement.parentElement.parentNode.firstChild.textContent;

	editElement = e.target.parentElement.parentElement.parentNode.firstChild;
};

const removeTask = (e) => {
	e.target.parentElement.parentElement.parentNode.remove();
	if (document.querySelectorAll(".item__wrapper").length == 0)
		itemClearBtn.style.display = "none";

	infoTask(
		"item delete",
		e.target.parentElement.parentElement.parentNode.firstElementChild
			.textContent
	);
};

const addTask = (e) => {
	e.preventDefault();
	const taskValue = inputValue.value;
	itemClearBtn.style.display = "flex";

	if (taskValue !== "" && !editFlag) {
		const taskBox = document.createElement("div");
		taskBox.className = "item__wrapper";
		taskBox.innerHTML = `<p>${taskValue}</p><div class="item__change"><span class="item__edit"><i class="fas fa-edit"></i></span><span class="item__delete"><i class="fas fa-trash"></i></span>`;
		inputValue.value = "";
		itemList.appendChild(taskBox);

		infoTask("item added to the list", taskValue);

		document
			.querySelectorAll(".item__delete")
			.forEach((el) => el.addEventListener("click", removeTask));

		document
			.querySelectorAll(".item__edit")
			.forEach((el) => el.addEventListener("click", editTask));

		document.querySelector(".item__btn").addEventListener("click", clearTask);
	} else if (editFlag) {
		editElement.textContent = inputValue.value;
		inputValue.value = "";
		editFlag = false;
	}
};

formList.addEventListener("submit", addTask);
