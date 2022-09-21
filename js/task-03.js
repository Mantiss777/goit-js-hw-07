const images = [
	{
		url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat",
	},
	{
		url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
	},
	{
		url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Group of Horses Running",
	},
];

function addGallery(images) {
	const listWithId = document.querySelector("ul.gallery");

	let makeGallerylink = images.map(image => {
		let makeGalleryTeg = `<li class="item__img"><img class="picture" src=${image.url}	alt="${image.alt}" width="370" hight="245"></li>`;
		return makeGalleryTeg;
		}).join("");

	listWithId.insertAdjacentHTML("beforeend", makeGallerylink);

	return listWithId;
}

console.log(addGallery(images));
