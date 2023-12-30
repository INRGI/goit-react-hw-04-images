import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '40331003-99a3d5cb80482624416a8cb30';

const per_page = 12;

export const getImages = async (query, page) => {
    const response = await axios.get(`?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`);
    return response.data;
};
