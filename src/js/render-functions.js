import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from "axios";
import getImagesByQuery from './pixabay-api.js';
const BASE_URL = "https://pixabay.com/api/";
const imageContainer = document.querySelector('.gallery');
getImagesByQuery();
const options = { 
     tags: 'alt',
    largeImageURL: 'data-source',
    webformatURL: 'src',
    likes: 0,
    views: 0,
    comments: 0,
    downloads: 0
}
const lightbox = new SimpleLightbox('.gallery_item a', options);

export default function createGallery(images = [], options = {}) {
    const imagesMarkup = images.map(({id, pageURL}) => {
        return `<li class="gallery_item" id="${id}">
    <a href="${pageURL}"><img src="${options.webformatURL}"  data-source="${options.largeImageURL} alt="${options.tags}" loading="lazy" class="gallery_image"/>
    <div class="info">
        <p class="info_item">
            <b>Likes</b> ${options.likes}
        </p>
        <p class="info_item">   
            <b>Views</b> ${options.views}
        </p>
        <p class="info_item">
            <b>Comments</b> ${options.comments}
        </p>
        <p class="info_item">
            <b>Downloads</b> ${options.downloads}
        </p>
    </div>
    </a>
    </li>`;
    })
    .join('');
    lightbox.refresh();
    return imagesMarkup;
};


export function clearGallery(){
    imageContainer.innerHTML = '';
};

export function showLoader(){
const loader = document.querySelector('.loader');
class Loader {
    constructor() {
        this.loader = document.createElement('div');
       
        document.body.appendChild(this.loader);
    }
}
new Loader();
};

export function hideLoader(){
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'none';
        document.body.removeChild(loader);
    }
};

export function appendImagesToGallery(imagesMarkup){
    imageContainer.insertAdjacentHTML('beforeend', imagesMarkup);
}
