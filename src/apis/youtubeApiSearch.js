import axios from "axios";

const api_KEY = "AIzaSyCG8N-kqNgohHjPf6bNFFU8V3oYn9WhxNE";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: api_KEY
    }
});