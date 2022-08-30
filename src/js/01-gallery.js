import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';



//*    Unpacking   galleryItems      

const imagesSwitchGalleryContainer  = document.querySelector(".gallery");
const cardsSwitchMarkup = element => {
  return ` <a class="gallery__item gallery__link" href="${element.original}">
  <img class="gallery__image" src="${element.preview}" alt="${element.description}" class ='gallery__image'/>
</a>`;
};

  const createSwitchListElements = galleryItems.map(cardsSwitchMarkup).join('');
  console.log(createSwitchListElements);
  imagesSwitchGalleryContainer.insertAdjacentHTML('beforeend', createSwitchListElements);

//*   Create   SimpleLightbox

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});