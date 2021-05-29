import axios, { AxiosResponse } from 'axios';

import Videos from 'Axios/videos';
import Auth from 'Axios/auth';

const instance = axios.create({
    baseURL: 'https://thebetter.bsgroup.eu',
    headers: {
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE, OPTIONS"
    }
})

const response = <T>(response: AxiosResponse<T>) => response;

export const request = {
    post: <T>(url: string, body: {}) => instance.post<T>(url, body, { headers: { 'Authorization': localStorage.getItem('token') } }).then(response)
}

const agent = {
    Videos,
    Auth
}

export default agent;