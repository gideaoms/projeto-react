import { createStore, applyMiddleware } from 'redux'
import reduxSaga from 'redux-saga'

import sagas from 'js/services/sagas'
import reducers from 'js/services/reducers'

const sagaMiddleware = reduxSaga()
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
    reducers,
    devTools,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagas)

export default store