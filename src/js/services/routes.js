import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from 'js/templates/home/home.index'
import Uf from 'js/templates/uf/uf.index'
import Login from 'js/templates/user/user.login'

export default props => {
    console.log(props)
    return (    
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/login' component={ Login } />
            <Route path='/state' component={ Uf } />
        </Switch>
    )
}