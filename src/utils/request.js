import axios from 'axios';

const errorHandle = (status, other) => {
    switch (status) {
        case 400:
            break;
        case 401:
            break;
        case 403:
            break;
        case 404:
            break;
        default:
            break;
    }
}

const instance = axios.create({
    timeout: 6000,
})

instance.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        return Promise.reject(error)
    }
)

export default instance;