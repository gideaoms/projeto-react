import { INITIAL_STATE } from './uf.initial'
import { STATE_LOAD_LIST, STATE_LOAD_ALL, STATE_LOAD_ONE, STATE_SUCCESS, STATE_ERROR } from './uf.type'

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case STATE_LOAD_LIST:
            return { ...state, isLoading: true }
        case STATE_SUCCESS:
            return { ...state, isLoading: false, list: action.payload }        
        default:
            return state
    }
}