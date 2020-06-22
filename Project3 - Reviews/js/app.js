const arrReviews = [
	{
		id: 1,
		img: "./images/pic1.jpg",
		name: "susan smith",
		job: "web developer",
		text:
			"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
	},
	{
		id: 2,
		img: "./images/pic2.jpg",
		name: "Peter johnson",
		job: "ux designer",
		text:
			"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
	},
	{
		id: 3,
		img: "./images/pic3.jpg",
		name: "anna jones",
		job: "intern",
		text:
			"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
	},
	{
		id: 4,
		img: "./images/pic4.jpg",
		name: "mely anderson",
		job: "the boss",
		text:
			"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
	},
];

const rightArrow = document.getElementById("right");
const leftArrow = document.getElementById("left");

const imgRev = document.querySelector(".img-rev");
const authorRev = document.querySelector(".author-rev");
const jobRev = document.querySelector(".job-rev");
const infoRev = document.querySelector(".info-rev");

// set starting item
let activeElement = 0;

const changeElement = () => {
	if (activeElement === arrReviews.length) activeElement = 0;
	else if (activeElement < 0) activeElement = arrReviews.length - 1;

	imgRev.src = arrReviews[activeElement].img;
	authorRev.textContent = arrReviews[activeElement].name;
	jobRev.textContent = arrReviews[activeElement].job;
	infoRev.textContent = arrReviews[activeElement].text;
};

rightArrow.addEventListener("click", function () {
	activeElement++;
	changeElement();
});

leftArrow.addEventListener("click", function () {
	activeElement--;
	changeElement();
});
