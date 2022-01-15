import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '25256020-33b05b26d47cbc29ae2b43e84';

export const getImages = async (text, count) => {
    try{
        const data = await axios.get(`${URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}&safesearch=true`)
        return data;
    }catch(error){
        console.log(error)
    }
}


