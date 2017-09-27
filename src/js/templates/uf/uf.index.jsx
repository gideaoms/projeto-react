import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import List from './uf.list'

class Uf extends Component {

    render () {
        return (
            <div>
                {/* <h3>UF</h3> */}
                {/* <Switch> */}
                    { this.props.isRedirectLogin && <Redirect to='/login' /> }
                    <Route exact path='/state' component={ List } />
                {/* </Switch> */}
            </div>
        )
    }

}

const mapStateToProps = state => ({ isRedirectLogin: state.auth.isRedirectLogin })
export default connect(mapStateToProps, null)(Uf)