import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://jsonplaceholder.typicode.com/',

})

// api
export const placeholderAPI = {
    getPosts() {
        return instance.get('posts');
    },
    getAuthors() {
        return instance.get('users');
    }
}


export  type ResponsePostsDataType = {
    userId: number,
    id: number,
    title: string,
    body: string
}
export  type ResponseAuthorsDataType = {
    "id": number,
    "name": string
    "username": string
    "email": string
    "address": {
        "street": string
        "suite": string
        "city":string
        "zipcode": string
        "geo": {
            "lat": string
            "lng": string
        }
    },
    "phone": string
    "website": string
    "company": {
        "name":string
        "catchPhrase":string
        "bs": string
    }
}
