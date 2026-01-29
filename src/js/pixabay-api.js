import axios from "axios";
const input = document.querySelector('input[name="search-text"]');
const query = input.value;
const BASE_URL = "https://pixabay.com/api/";
const API_KEY = '54321863-b2668d69a653290eef8a021dd';
export default async function getImagesByQuery(query){
    const response = await axios.get(BASE_URL, {
        params: {
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        q: query
    }

});
    return response.data;
}




