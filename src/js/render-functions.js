export default function createGallery(images){
    const markup = images.map((image) => {
        return `<div class="gallery">
                    <a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title=""></a>
                    <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"></a>
                </div>`
    })
    .jin('');
    images.refresh();
    imageContainer.innerHTML = markup;

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
