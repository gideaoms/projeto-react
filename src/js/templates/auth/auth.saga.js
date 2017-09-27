import { takeEvery, put } from 'redux-saga/effects'

import { AUTH_UNAUTHORIZED } from './auth.type'
import { unauthorized } from './auth.action'

function * redirectLogin () {
    yield put(unauthorized())
}

export default function * () {
    yield [
        takeEvery(AUTH_UNAUTHORIZED, redirectLogin)
    ]
}