import { APP_KEY_STORAGE } from './config'

export default {
    addToken: item => {
        localStorage.setItem(APP_KEY_STORAGE, item)
    },
    removeToken: () => {
        localStorage.removeItem(APP_KEY_STORAGE)
    },
    getToken: () => {
        return localStorage.getItem(APP_KEY_STORAGE)
    }
}