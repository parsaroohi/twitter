import Axios from 'axios'


export const getAxiosInstanceJsonServer = () => {
    return Axios.create({
        baseURL: "http://localhost:3000",
        headers: {
            API_KEY: "aslkghdakjsghalifewovnasldfjlkjgosa"
        }
    })
}

export const getAxiosInstanceAuth = () => {
    return Axios.create({
        baseURL: "http://localhost:3000/api/",
        headers: {
            // API_KEY: "aslkghdakjsghalifewovnasldfjlkjgosa"
        }
    })
}

export const getAxiosInstanceApi = () => {
    return Axios.create({
        baseURL: "http://localhost:3000/api/",
        headers: {
            'x-auth-token': localStorage.getItem('x-auth-token')
        }
    })
}