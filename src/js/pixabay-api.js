export default function getImagesByQuery(query){
 return axios.get(`/${query}`)
.then(({data}) => data)
.catch(console.error(error.message));
}

const input = document.querySelector('input[name="search-text"]');
import axios from "axios";
axios.defaults.baseURL = 'https://pixabay.com/api/';



