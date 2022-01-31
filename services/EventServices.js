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
        return apiClient.get(`/operators?_limit=${perPage}&_page=${page}`)
    },
    getOperatorId(id){
        return apiClient.get(`/operators/${id}`)
    },
    getOperator(){
        return apiClient.get(`/operators`)
    },
}