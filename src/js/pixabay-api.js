const axios = require('axios');

const input = document.querySelector('input[name="search-text"]');

axios.defaults.baseURL = 'https://pixabay.com/api/';

export function getImagesByQuery(query){
 return axios.get(`/${query}`)
.then(({data}) => data)
.catch(console.error(error.message));
}

