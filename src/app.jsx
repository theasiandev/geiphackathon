import React, { lazy } from 'react'
import { HashRouter, Route } from 'react-router-dom'

const LandingLayout = lazy(
    () => import('./LandingLayout')
)

const AppLayout = () => {
    return(
        <HashRouter>
            <Route path="/">
                <LandingLayout />
            </Route>
            <Route path="/home"></Route>
            <Route path="/find"></Route>
            <Route path="/inbox"></Route>
            <Route path="/host"></Route>
            <Route path="/tours"></Route>
        </HashRouter>
    )
}

export default AppLayout;