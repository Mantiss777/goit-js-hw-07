import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");

function addGallery(galleryItems) {
  const makeGallerylink = galleryItems
    .map((image) => 
      `<a class="gallery__item" href="${image.original}">
			<img class="gallery__image" src="${image.preview}" alt="${image.description}" />
		</a>` 
    )
    .join("");

  container.insertAdjacentHTML("beforeend", makeGallerylink);

  return container;
}

addGallery(galleryItems);


const gallery = new SimpleLightbox('.gallery a', {
	
	captionsData: 'alt',
	captionDelay: 250,

});

gallery.on('show.simplelightbox');