import axios from  'axios'

const apiClient = axios.create({
    baseURL:'http://localhost:3000',
    withCredentials:false,
    headers:{
        Accept: 'application/json',
        'Content-Type':'application/json'
    }
})

export default {
    getOperators(page, perPage){
        return apiClient.get(`/operators?_page=${page}&_limit=${perPage}`)
    },
    getOperatorId(id){
        return apiClient.get(`/operators/${id}`)
    }
}