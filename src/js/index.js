import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reduxSaga from 'redux-saga'

import App from 'js/templates/app'
import store from 'js/services/store'

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>
, document.getElementById('app'))