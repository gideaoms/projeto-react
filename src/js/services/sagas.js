import { all } from 'redux-saga/effects'

import uf from 'js/templates/uf/uf.saga'
import auth from '../templates/auth/auth.saga'

export default function * () {
    yield all([
        uf(),
        auth()
    ])
}