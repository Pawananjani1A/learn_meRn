import axios from 'axios';



export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID NjsoiNLvKO8zY-eEzu_GqdIZcwyTiJun9sTkR6kPgAw'
    }
});