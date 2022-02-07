import axios from  'axios'

export const apiClient = axios.create({
    baseURL:'http://localhost:3000',
    withCredentials:false,
    headers:{
        Accept: 'application/json',
        'Content-Type':'application/json'
    }
})

export default {
    getOperatorId(id){
        return apiClient.get(`/operators/${id}`)
    },
    getOperator(){
        return apiClient.get('/operators')
    },
}