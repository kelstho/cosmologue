import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Events from '../pages/Events'
import Profile from '../pages/Profile'
import Signup from '../pages/Signup'

const Routes = () => (
    <Switch>
        <Route exact path = '/' component = {Home} />
        <Route path = '/events' component = {Events} />
        <Route path = '/profile' component = {Profile} />
        <Route path = '/signup' component = {Signup} />
    </Switch>
)

export default Routes