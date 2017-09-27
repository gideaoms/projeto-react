import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { setCurrentPageLogin } from 'js/templates/auth/auth.action'

class Login extends Component {

    constructor (props) {
        super(props)

        //this.props.setCurrentPageLogin()
    }

    render () {
        return (
            <h1>Login</h1>
        )
    }

}

const mapDispatchToProps = dispatch => bindActionCreators({ setCurrentPageLogin }, dispatch)
export default connect(null, mapDispatchToProps)(Login)