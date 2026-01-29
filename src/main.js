import fetchData from './js/pixabay-api.js';
import moduleName from './js/render-functions.js';
import './css/styles.css';

import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import axios from "axios";

import appendImagesToGallery from './js/render-functions.js';
import createGallery, {clearGallery} from './js/render-functions.js';
import {showLoader, hideLoader}  from './js/render-functions.js';
import getImagesByQuery from './js/pixabay-api.js';
const form = document.querySelector('.form');
const input = document.querySelector('input[name="search-text"]');
const imageContainer = document.querySelector('.gallery');
let currentPage = 1;
 
const imagesPerPage = 12;
form.addEventListener('submit', onSearch);

async function onSearch(event){
    event.preventDefault();
    const query = input.value.trim();
    if (query === '') {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search query.',
            position: 'topRight'
        });
        return;
    }
    clearGallery();
    showLoader();

    currentPage = 1;
    try {
        const data = await getImagesByQuery(`${query}&page=${currentPage}&per_page=${imagesPerPage}`);
        if (data.hits.length === 0) {
            iziToast.error({
                title: 'No Results',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight'
            });
        } else {
            appendImagesToGallery(createGallery(data.hits));
            iziToast.success({
                title: 'Success',
                message: `Found ${data.totalHits} images.`,
                position: 'topRight'
            });
        }
    } catch (error) {
        console.log(error.message);
        iziToast.error({
            title: 'Error',
            message: 'An error occurred while fetching images.',
            position: 'topRight'
        });
    } finally {
        hideLoader();
    }
}
// const query = input.value;
// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['x-api-key'] = import.meta.env.VITE_API_KEY;
// var VITE_API_KEY = '54321863-b2668d69a653290eef8a021dd';
// var URL = "https://pixabay.com/api/?key="+VITE_API_KEY+"&q="+encodeURIComponent('red roses');
      
// axios.defaults.params = {
//     key: '54321863-b2668d69a653290eef8a021dd',
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//     q: query,
//     page: currentPage,
//     per_page: imagesPerPage
// };

// axios.get(`?q=${query}`)
//     .then(({data}) => {
//         appendImagesToGallery(data.hits);

//     })
//     .catch(error => console.error('Error:', error));

// window.addEventListener('scroll', async () => {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
//         currentPage += 1;
//         showLoader();
//         try {
//             const data = await getImagesByQuery(`${query}&page=${currentPage}&per_page=${imagesPerPage}`);
//             if (data.hits.length > 0) {
//                 createGallery(data.hits);
//             }
//         } catch (error) {
//             iziToast.error({
//                 title: 'Error', 
//                 message: 'An error occurred while fetching more images.',
//                 position: 'topRight'
//             });
//         } finally {
//             hideLoader();
//         }
//     }
// });
