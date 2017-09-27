import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Main from 'js/templates/main/main.index'
import Routes from 'js/services/routes'
import Toastr from 'js/common/toastr'

class App extends Component {

    render () {
        return (
            <BrowserRouter>
                <Main>
                    <Routes />
                    <Toastr />
                </Main>
            </BrowserRouter>
        )
    }
}

export default App