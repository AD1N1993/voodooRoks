import axios from 'axios'

const instance = axios.create({
    baseURL: "https://loripsum.net/api/",

})

export const loremAPI = {
    getLoremHTML(count: number, size: string, headers: string) {
        return instance.get(`${count}/${size}/${headers}`).then(res => res.data)
    }
}

export  type ResponsePostsDataType = {
    data: string,
}
