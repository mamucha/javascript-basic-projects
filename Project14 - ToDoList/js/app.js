const formList = document.querySelector(".form__list");
const inputValue = document.querySelector("#list");
const itemList = document.querySelector(".item__list");
const itemEdit = document.querySelector(".item__edit");
const itemDelete = document.querySelector(".item__delete");

let editFlag = false;
let editElement;

const editTask = (e) => {
	editFlag = true;
	inputValue.value =
		e.target.parentElement.parentElement.parentNode.firstChild.textContent;

	editElement = e.target.parentElement.parentElement.parentNode.firstChild;
};

const removeTask = (e) => {
	e.target.parentElement.parentElement.parentNode.remove();
};

const addTask = (e) => {
	e.preventDefault();
	const taskValue = inputValue.value;

	if (taskValue !== "" && !editFlag) {
		const taskBox = document.createElement("div");
		taskBox.className = "item__wrapper";
		taskBox.innerHTML = `<p>${taskValue}</p><div class="item__change"><span class="item__edit"><i class="fas fa-edit"></i></span><span class="item__delete"><i class="fas fa-trash"></i></span>`;
		inputValue.value = "";
		itemList.appendChild(taskBox);
		document
			.querySelectorAll(".item__delete")
			.forEach((el) => el.addEventListener("click", removeTask));

		document
			.querySelectorAll(".item__edit")
			.forEach((el) => el.addEventListener("click", editTask));
	} else if (editFlag) {
		console.log(editElement);
		editElement.textContent = inputValue.value;
		inputValue.value = "";
		editFlag = false;
	}
};

formList.addEventListener("submit", addTask);
