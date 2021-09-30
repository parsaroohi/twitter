import { getAxiosInstanceApi, getAxiosInstanceJsonServer } from "./api";


export const getAllTweets = (callback) => {
    getAxiosInstanceApi().post('/getAllTweet')
        .then(response => {
            const data = response.data
            callback(true, data)
        }).catch(error => {
            console.log(error)
            callback(false, error)
        })
}

export const getTweetByHashTagRequest = (hashTag, callback) => {
    getAxiosInstanceApi().post('getAllTweet', { hashTag })
        .then(response => {
            const data = response.data
            callback(true, data)
        }).catch(error => {
            console.log(error)
            callback(false, error)
        })
}

export const getTweetByUserRequest = (user, callback) => {
    getAxiosInstanceApi().post('getAllTweet', { user })
        .then(response => {
            const data = response.data
            callback(true, data)
        }).catch(error => {
            console.log(error)
            callback(false, error)
        })
}

export const getHashTags = (callback) => {
    getAxiosInstanceApi().get('getAllHashTags')
        .then(respnse => {
            const data = respnse.data
            callback(true, data)
        }).catch(error => {
            callback(false, error)
        })
}

export const getUsers = (callback) => {
    getAxiosInstanceApi().get('getAllUser')
        .then(respnse => {
            const data = respnse.data
            callback(true, data)
        }).catch(error => {
            callback(false, error)
        })
}

export const newTweetRequest = (data, callback) => {
    getAxiosInstanceApi().post('newTweets', {
        data
    }).then(response => {
        const data = response.data
        callback(true, data)
    }).catch(error => {
        console.log(error)
        callback(false, error)
    })
}

export const likeTweetRequest = (data, callback) => {
    getAxiosInstanceApi().get('likeTweet/' + data)
        .then(response => {
            const data = response.data
            callback(true, data)
        }).catch(error => {
            console.log(error)
            callback(false, error)
        })
}