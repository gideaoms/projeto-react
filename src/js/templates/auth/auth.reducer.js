import { INITIAL_STATE } from './auth.initial'
import { AUTH_UNAUTHORIZED, CURRENT_IS_LOGIN } from './auth.type'

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case AUTH_UNAUTHORIZED:
            return { ...state, isRedirectLogin: true }
        case CURRENT_IS_LOGIN:
            return { ...state, isRedirectLogin: false }
        default:
            return state
    }
}