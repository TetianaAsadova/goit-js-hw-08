import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

galleryRef.innerHTML = createMarkup(galleryItems);

function createMarkup(items) {
    return items.map(({ preview, original, description }) => {
        return `
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
            `;
        })
        .join('');
}

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });
