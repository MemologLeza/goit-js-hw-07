import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery_list = document.querySelector(".gallery");
const markup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('');
gallery_list.insertAdjacentHTML("beforeend", markup);

const gallery = new SimpleLightbox('.gallery li a', { captionsData: 'alt', captionDelay: 250 });
gallery_list.addEventListener("click", showImg);

function showImg(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    };
    const imgUrl = event.target.parentNode.href;
    gallery.open(imgUrl);
}


