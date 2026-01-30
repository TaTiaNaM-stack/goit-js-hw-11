import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

const imageContainer = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery_item a', { 
     tags: 'alt',
    largeImageURL: 'src',
    webformatURL: 'src',
    likes: 0,
    views: 0,
    comments: 0,
    downloads: 0
});

export default function createGallery(images = []) {
    const imagesMarkup = images.map(({id, pageURL}) => {
        return `<li class="gallery_item" id="${id}">
    <a href="${pageURL}"><img src="${webformatURL}" alt="${tags}" loading="lazy" class="gallery_image"/>
    <div class="info">
        <p class="info_item">
            <b>Likes</b> ${likes}
        </p>
        <p class="info_item">   
            <b>Views</b> ${views}
        </p>
        <p class="info_item">
            <b>Comments</b> ${comments}
        </p>
        <p class="info_item">
            <b>Downloads</b> ${downloads}
        </p>
    </div>
    </a>
    </li>`;
    })
    .join('');
    return imagesMarkup;
};


export function clearGallery(){
    imageContainer.innerHTML = '';
};

export function showLoader(){
    const loader = document.createElement('div');
    loader.className = 'Loading images, please wait...';
    document.body.appendChild(loader);
    loader.style.display = 'block';
    loader.style.position = 'fixed';
    loader.style.top = '50%';
    loader.style.left = '50%';
    loader.style.transform = 'translate(-50%, -50%)';
    loader.style.padding = '20px';
    loader.style.backgroundColor = '#fff';
    loader.style.color = 'rgba(0, 0, 0, 0.8)';
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
