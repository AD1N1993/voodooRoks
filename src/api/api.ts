import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_LOREM_URL,

})

export const loremAPI = {
    getLoremHTML(count: number, size: string, headers: string) {
        return instance.get(`${count}/${size}/${headers}`).then(res => res.data)
    },
}

export  type ResponsePostsDataType = {
    data: string,
}
