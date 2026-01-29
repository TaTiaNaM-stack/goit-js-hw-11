const imageContainer = document.querySelector('.gallery');

export default function createGallery(images = []){
    const imagesMarkup = images.map(({id, pageURL}) => {
        return `<li class="gallery_item" id="${id}">
    <a href="${pageURL}">
    </li>`;
    })
    .join('');
    return imagesMarkup;
};
 const gallery = document.querySelector('.gallery');

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
