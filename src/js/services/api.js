import axios from 'axios'
import store from './store'

import storage from './storage'
import { BASE_URL } from './config'
import { unauthorized } from 'js/templates/auth/auth.action'

axios.defaults.baseURL = BASE_URL

axios.interceptors.request.use(config => {
    const token = storage.getToken()
    if (token) {
        config.headers.Authorization = token
    }
    return config
}, error => {
    return error
})

axios.interceptors.response.use(response => {
    return response
}, error => {
    if (error.response.status === 401) {
        store.dispatch(unauthorized())
    }
    return error
})

export default axios