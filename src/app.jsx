import React, { lazy } from 'react'
import { HashRouter, Route } from 'react-router-dom'

const HomeLayout = lazy(
    () => import('../src/HomeLayout')
)

const AppLayout = () => {
    return(
        <HashRouter>
            <Route path="/">
                <HomeLayout />
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