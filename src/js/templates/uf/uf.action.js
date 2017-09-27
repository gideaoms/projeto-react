import { STATE_LOAD_LIST, STATE_SUCCESS, STATE_ERROR } from './uf.type'

export const loadList = () => {
    return {
        type: STATE_LOAD_LIST
        //type: 'AUTH_UNAUTHORIZED'
    }
}

export const success = payload => {
    return {
        type: STATE_SUCCESS,
        payload
    }
}

export const error = () => {
    return {
        type: STATE_ERROR
    }
}