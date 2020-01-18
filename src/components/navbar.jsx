import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../css/header.css'
import mainStyles from '../../css/main.css'




class NavBar extends React.Component {


    render() {
        return (
            <header>
                <div className = {styles.navbarBox}>
                    <h2 className = {styles.logo}>Wander</h2>
                    <nav className = {styles.NavigationMenu}>
                        <ul>
                            <li>
                                <Link to="/find"><i class="NavMenuIcon"></i>Find Trips</Link>
                            </li>
                            <li>
                                <Link to="/host"><i class="NavMenuIcon"></i>Host Trips</Link>
                            </li>
                            <li>
                                <Link to="/tours"><i class="NavMenuIcon"></i>Tickets</Link>
                            </li>
                            <li>
                                <Link to="/inbox"><i class="NavMenuIcon"></i>Inbox</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className = {styles.toggleMenu}>
                        <div className = {styles.hamburger}></div>
                    </div>
                </div>
            </header> 
        )
    }
    
}

export default NavBar;