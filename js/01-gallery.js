import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery_list = document.querySelector(".gallery");
const markup = galleryItems.map(({ preview, original, description }) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');
gallery_list.insertAdjacentHTML("beforeend", markup);

function showImg(event) {
    event.preventDefault();
     if (event.target.nodeName !== "IMG") {
    return;
     }
    basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`).show();

}
gallery_list.addEventListener("click", showImg);


