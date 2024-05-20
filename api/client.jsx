import {create} from 'apisauce'

const apiClient = create({
    baseURL: 'http://10.10.7.97:9000/api/',
    // timeout: 30000
})

export default apiClient;