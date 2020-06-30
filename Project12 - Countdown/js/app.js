const monthNames = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const dayNames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;
const oneSec = 1000;

const time = new Date();
const countYear = time.getFullYear();
const countMouth = time.getMonth();
const countDay = time.getDate();

const endTime = new Date(countYear, countMouth, countDay + 10, 12, 0, 0);

document.querySelector(".text__time").textContent = ` ${
	dayNames[endTime.getDay()]
}, ${endTime.getDate()} ${
	monthNames[endTime.getMonth()]
} ${endTime.getFullYear()} ${endTime.getHours()}:0${endTime.getMinutes()}am`;

const countNumber = document.querySelectorAll(".countdown__box h3");

setInterval(() => {
	const nowTime = new Date();

	let day = Math.floor(endTime / oneDay - nowTime / oneDay);
	let hours = Math.floor((endTime / oneHour - nowTime / oneHour) % 24);
	let min = Math.floor((endTime / oneMinute - nowTime / oneMinute) % 60);
	let sec = Math.floor((endTime / oneSec - nowTime / oneSec) % 60);

	const values = [day, hours, min, sec];
	function format(item) {
		return item < 10 ? (item = `0${item}`) : item;
	}

	countNumber.forEach((item, index) => {
		item.textContent = format(values[index]);
	});
}, 1000);
