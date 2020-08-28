import React from 'react'
import { Router, Route } from "react-router-dom";
import PrivateRoute from "../_components"
function AppRoute() {
    return (
        <Router>
        <div>
                <Route path="/" component={} />
                <Route path="/login" component={} />
                <Route path="/signup" component={} />
                <Route path="/home" component={} />
                <PrivateRoute path="/main" component={} />
                <Route path="/details" component={} />
                <Route path="/checkout" component={} />
                <PrivateRoute path="/payment" component={} />
        </div>
        </Router>
    )
}

export default AppRoute
