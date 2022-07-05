import axios from 'axios';
const KEY = 'AIzaSyDTjXetxXPoEus8PyDYI1_aNfE7Ov4RDGI';



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: '5',
        key: KEY
    },
})
