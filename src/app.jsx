import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import LandingLayout from './LandingLayout'
import HomeLayout from './HomeLayout'
import NavBar from './components/navbar'
import FindTripsLayout from './FindTripsLayout'
import InboxLayout from './InboxLayout'
import HostTripsLayout from './HostTripsLayout'
import ToursLayout from './ToursLayout'
import TripDetailsLayout from './TripDetailsLayout'

const AppLayout = () => {
    return(
        <HashRouter>
            <Route exact path="/">
                <LandingLayout />
            </Route>
            <Route path="/home">
                <NavBar />
                <HomeLayout />
            </Route>
            <Route path="/find">
                <NavBar />
                <FindTripsLayout />
            </Route>
            <Route path="/inbox">
                <NavBar />
                <InboxLayout />
            </Route>
            <Route path="/host">
                <NavBar />
                <HostTripsLayout />
            </Route>
            <Route path="/tours">
                <NavBar />
                <ToursLayout />
            </Route>
            <Route path="/details">
                <NavBar />
                <TripDetailsLayout />
            </Route>
        </HashRouter>
    )
}

export default AppLayout;