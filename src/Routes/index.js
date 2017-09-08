import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../Views/Home';
import Login from '../Views/Login';
import Signup from '../Views/Signup';
import Dashboard from '../Views/Dashboard';

export default () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
    </Router>
)