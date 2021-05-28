import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://thebetter.bsgroup.eu',
    headers: {
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE"
    }
})

export default instance;