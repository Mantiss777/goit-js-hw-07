import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const container = document.querySelector(".gallery");

function addGallery(galleryItems) {
  let makeGallerylink = galleryItems
    .map((image, i) => {
      let makeGalleryTeg = `
		<a class="gallery__item" href="${galleryItems[i].original}">
			<img class="gallery__image" src="${galleryItems[i].preview}" alt="${galleryItems[i].description}" />
		</a>`;

      return makeGalleryTeg;
    })
    .join("");

  container.insertAdjacentHTML("beforeend", makeGallerylink);

  return container;
}

addGallery(galleryItems);



container.addEventListener("click", onClickGallery);

function onClickGallery(event) {
	event.preventDefault();
	const isGalleryEl = event.target.classList.contains("gallery__image");
	if (!isGalleryEl) {
		return;
	}
	
}

	let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	// do something…
});
