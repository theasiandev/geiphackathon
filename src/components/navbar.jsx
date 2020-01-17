import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <ul>
            <li><Link to="/find">Find Trips</Link></li>
            <li><Link to="/host">Host Trips</Link></li>
            <li><Link to="/tours">Sign Up for Tours</Link></li>
            <li><Link to="/inbox">Inbox</Link></li>
        </ul>
    )
}

export default NavBar;