import { galleryItems } from "./gallery-items.js";
// Change code below this line


const container = document.querySelector("div.gallery");

function addGallery(galleryItems) {
  let makeGallerylink = galleryItems
    .map((image) => {
      let makeGalleryTeg = `<div class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
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




