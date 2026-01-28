import axios from "axios";
axios.defaults.baseURL = 'https://pixabay.com/api/';
export default function getImagesByQuery(query){
 return axios.get(`?q=${query}`)
.then(({data}) => data)
.catch(error => {
    console.log(error)
});
}




