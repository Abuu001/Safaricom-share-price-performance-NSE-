import axios from 'axios'

const instance = axios.create({
    baseURL : 'https://www.deveintapps.com/nseticker/api/v1'
})
instance.defaults.headers.common['Authorization'] ='AUTH_TOKEN FROM INSTANCE';
export default instance;