import { takeEvery, put } from 'redux-saga/effects'

import api from 'js/services/api'
import { STATE_LOAD_LIST } from './uf.type'
import { success, error } from './uf.action'

function * getList () {
    try {
        const response = yield api.get('/state')
        yield put(success(response.data))
    } catch (e) {
        yield put(error(e))
    }
}

export default function * () {
    yield [
        takeEvery(STATE_LOAD_LIST, getList)
    ]
}