import { galleryItems } from "./gallery-items.js";
// Change code below this line

import SimpleLightbox from "simplelightbox";

const container = document.querySelector("div.gallery");

function addGallery(galleryItems) {
  let makeGallerylink = galleryItems
    .map((image, i) => {
      let makeGalleryTeg = `<div class="gallery__item">
  <a class="gallery__link" href="${galleryItems[i].original}">
    <img
      class="gallery__image"
      src="${galleryItems[i].preview}"
      data-source="${galleryItems[i].original}"
      alt="${galleryItems[i].description}"
    />
  </a>
</div>`;

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

	let BigImg = event.target.dataset.source;
	
		basicLightbox.create(`
		<img width="1400" height="900" src="${BigImg}">
	`).show()

}




