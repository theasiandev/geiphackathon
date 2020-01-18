import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import LandingLayout from './LandingLayout'
import HomeLayout from './HomeLayout'

const AppLayout = () => {
    return(
        <HashRouter>
            <Route exact path="/">
                <LandingLayout />
            </Route>
            <Route path="/home">
                <HomeLayout />
            </Route>
            <Route path="/find"></Route>
            <Route path="/inbox"></Route>
            <Route path="/host"></Route>
            <Route path="/tours"></Route>
        </HashRouter>
    )
}

export default AppLayout;