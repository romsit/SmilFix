import axios from 'axios'

const baseURL = 'http://localhost:3000/'

export default {
    getAll() {
        return axios.get(baseURL).then((response) => {
            return response.data
        })
    }
}