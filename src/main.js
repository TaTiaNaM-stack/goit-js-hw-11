import fetchData from './js/pixabay-api.js';
import moduleName from './js/render-functions.js';
import './css/styles.css';

import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import axios from "axios";


import {showLoader, hideLoader}  from './js/render-functions.js';

const form = document.querySelector('#search-form');
const input = document.querySelector('input[name="search-text"]');
const imageContainer = document.querySelector('.gallery-container');
let currentPage = 1;
let currentQuery = '';
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
    currentQuery = query;
    currentPage = 1;
    try {
        const data = await getImagesByQuery(`${currentQuery}&page=${currentPage}&per_page=${imagesPerPage}`);
        if (data.hits.length === 0) {
            iziToast.error({
                title: 'No Results',
                message: 'No images found for your query. Please try again.',
                position: 'topRight'
            });
        } else {
            createGallery(data.hits);
            iziToast.success({
                title: 'Success',
                message: `Found ${data.totalHits} images.`,
                position: 'topRight'
            });
        }
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'An error occurred while fetching images.',
            position: 'topRight'
        });
    } finally {
        hideLoader();
    }
}

window.addEventListener('scroll', async () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        currentPage += 1;
        showLoader();
        try {
            const data = await getImagesByQuery(`${currentQuery}&page=${currentPage}&per_page=${imagesPerPage}`);
            if (data.hits.length > 0) {
                createGallery(data.hits);
            }
        } catch (error) {
            iziToast.error({
                title: 'Error', 
                message: 'An error occurred while fetching more images.',
                position: 'topRight'
            });
        } finally {
            hideLoader();
        }
    }
});
