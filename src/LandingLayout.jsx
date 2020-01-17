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
                        <input id="emailInput"></input>
                        <label htmlFor="emailInput">Email Address: </label>
                        <input id="passwordInput"></input>
                        <label htmlFor="passwordInput">Password: </label>
                        <button type="button">Login</button>
                    </Card>
                    <Card>
                        <h4>Signup</h4>
                        <input id="emailInput"></input>
                        <label htmlFor="emailInput">Email Address: </label>
                        <input id="passwordInput"></input>
                        <label htmlFor="passwordInput">Password: </label>
                        <input id="confirmedPasswordInput"></input>
                        <label htmlFor="confirmedPasswordInput">Confirm Password: </label>
                        <button type="button">Sign Up</button>
                    </Card>
                </div>
            </div>
        )
    }
}

export default LandingLayout;