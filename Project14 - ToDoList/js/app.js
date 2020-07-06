const formList = document.querySelector(".form__list");
const inputValue = document.querySelector("#list");
const itemList = document.querySelector(".item__list");
const itemEdit = document.querySelector(".item__edit");
const itemDelete = document.querySelector(".item__delete");
const itemClearBtn = document.querySelector(".item__clear");
const alertText = document.querySelector(".main__title--info");

let editFlag = false;
let editElement;
let editId = "";

const editLocalStorage = (id, value) => {
	let items = getLocalStorage();

	items = items.map(function (item) {
		if (item.id === id) {
			item.value = value;
		}
		return item;
	});
	localStorage.setItem("list", JSON.stringify(items));
};

const removeLocalStorage = (id) => {
	let items = getLocalStorage();

	items = items.filter((item) => item.id !== id);

	localStorage.setItem("list", JSON.stringify(items));
};

const getLocalStorage = () => {
	return localStorage.getItem("list")
		? JSON.parse(localStorage.getItem("list"))
		: [];
};

const addLocalStorage = (id, value) => {
	const localArray = { id, value };
	let items = getLocalStorage();
	items.push(localArray);
	localStorage.setItem("list", JSON.stringify(items));
};

const infoTask = (text, item, action) => {
	alertText.style.opacity = "1";
	alertText.innerHTML = `${text}: <span>${item}</span>`;
	alertText.classList.add(action);

	setTimeout(() => {
		alertText.style.opacity = "0";
		alertText.classList.remove(action);
	}, 3000);
};

const clearTask = () => {
	document.querySelectorAll(".item__wrapper").forEach((el) => el.remove());
	localStorage.clear();
	itemClearBtn.style.display = "none";
	infoTask("clear all items", "", "delete");
};

const editTask = (e) => {
	const target = e.target.parentElement.parentElement.parentNode;
	editFlag = true;
	document.querySelector(".form__btn").textContent = "Edit";

	inputValue.value = target.firstChild.textContent;
	editElement = target.firstChild;
	editId = target.dataset.id;
};

const removeTask = (e) => {
	const target = e.target.parentElement.parentElement.parentNode;
	target.remove();
	if (document.querySelectorAll(".item__wrapper").length == 0)
		itemClearBtn.style.display = "none";

	removeLocalStorage(target.dataset.id);

	infoTask("item delete", target.firstElementChild.textContent, "delete");
};

const addTask = (e) => {
	e.preventDefault();
	const id = new Date().getTime().toString();
	const taskValue = inputValue.value;
	itemClearBtn.style.display = "flex";

	if (taskValue !== "" && !editFlag) {
		const taskBox = document.createElement("div");
		taskBox.className = "item__wrapper";
		taskBox.innerHTML = `<p>${taskValue}</p><div class="item__change"><span class="item__edit"><i class="fas fa-edit"></i></span><span class="item__delete"><i class="fas fa-trash"></i></span>`;
		inputValue.value = "";
		taskBox.setAttribute("data-id", id);
		itemList.appendChild(taskBox);

		infoTask("item added to the list", taskValue, "add");
		addLocalStorage(id, taskValue);

		document
			.querySelectorAll(".item__delete")
			.forEach((el) => el.addEventListener("click", removeTask));

		document
			.querySelectorAll(".item__edit")
			.forEach((el) => el.addEventListener("click", editTask));

		document.querySelector(".item__btn").addEventListener("click", clearTask);
	} else if (editFlag) {
		editElement.textContent = inputValue.value;
		editLocalStorage(editId, inputValue.value);
		document.querySelector(".form__btn").textContent = "Submit";
		inputValue.value = "";
		editFlag = false;
	}
};

const setupItems = () => {
	let items = getLocalStorage();

	if (items.length > 0) {
		items.forEach((item) => createListItem(item.id, item.value));
	}
};

const createListItem = (id, value) => {
	itemClearBtn.style.display = "flex";
	const taskBox = document.createElement("div");
	taskBox.className = "item__wrapper";
	taskBox.innerHTML = `<p>${value}</p><div class="item__change"><span class="item__edit"><i class="fas fa-edit"></i></span><span class="item__delete"><i class="fas fa-trash"></i></span>`;
	taskBox.setAttribute("data-id", id);
	itemList.appendChild(taskBox);
	document
		.querySelectorAll(".item__delete")
		.forEach((el) => el.addEventListener("click", removeTask));

	document
		.querySelectorAll(".item__edit")
		.forEach((el) => el.addEventListener("click", editTask));

	document.querySelector(".item__btn").addEventListener("click", clearTask);
};

window.addEventListener("DOMContentLoaded", setupItems);
formList.addEventListener("submit", addTask);
