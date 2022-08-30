

import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.modules";


// import "simplelightbox/dist/simple-lightbox.min.css";
// import SimpleLightbox from 'simplelightbox';
// import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';


//*    Unpacking   galleryItems

const imagesGalleryContainer = document.querySelector(".gallery");
const cardsMarkup = (element) => {
  return `
  <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${element.preview}"
      data-source="${element.original}"
      alt="${element.description}"
    />
  </a>
</div>`;
};

const createListElements = galleryItems.map(cardsMarkup).join("");
console.log(createListElements);
imagesGalleryContainer.insertAdjacentHTML("beforeend", createListElements);

let instance = null;

//*   Open  by  click   and create instance

imagesGalleryContainer.addEventListener("click", onPaletteContainerClick);

window.removeEventListener("keydown", onKeyPress);
function onPaletteContainerClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const isCurrentImage = evt.target.dataset.source;

  instance = basicLightbox.create(
    `<img class = "modal_image" src="${isCurrentImage}"/>`
  );
  instance.show();
  window.addEventListener("keydown", onKeyPress);
}

//*   Close  Modal  Window
function onKeyPress(evt) {
  const ESC_KEY_CODE = "Escape";
  const isKeyCode = evt.code === ESC_KEY_CODE;

  if (isKeyCode) {
    instance.close();
  }
}


// console.log(galleryItems);
export { galleryItems };