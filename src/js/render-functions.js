export function createGallery(images){
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

export function clearGallery(){};

export function showLoader(){};

export function hideLoader(){};
