import axios from 'axios';



const KEY = "AIzaSyBIZTdnMzOUM2scwWgvWcCIbu5KLBQ-KKk";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});