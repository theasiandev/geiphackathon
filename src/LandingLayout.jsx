import React from 'react'
import Card from './components/card'

class LandingLayout extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Wander</h1>
                </div>
                <div>
                    <Card>
                        <h4>Login</h4>
                        <label htmlFor="emailInput">Email Address: </label>
                        <input id="emailInput" type="email"/>
                        <label htmlFor="passwordInput">Password: </label>
                        <input id="passwordInput" type="password"/>
                        <button type="button">Login</button>
                    </Card>
                    <Card>
                        <h4>Signup</h4>
                        <label htmlFor="emailInput">Email Address: </label>
                        <input id="emailInput" type="email" />
                        <label htmlFor="passwordInput">Password: </label>
                        <input id="passwordInput" type="password" />
                        <label htmlFor="confirmedPasswordInput">Confirm Password: </label>
                        <input id="confirmedPasswordInput" type="password" /><br />
                        <label htmlFor="phone">Phone Number</label>
                        <input id="phone" type="number" maxLength="8" />
                        <button type="button">Sign Up</button>
                    </Card>
                </div>
            </div>
        )
    }
}

export default LandingLayout;