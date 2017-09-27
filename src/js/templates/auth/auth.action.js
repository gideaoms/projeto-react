import { AUTH_UNAUTHORIZED, CURRENT_IS_LOGIN } from './auth.type'

export const unauthorized = () => {
    return {
        type: AUTH_UNAUTHORIZED
    }
}

export const setCurrentPageLogin = () => {
    return {
        type: CURRENT_IS_LOGIN
    }
}