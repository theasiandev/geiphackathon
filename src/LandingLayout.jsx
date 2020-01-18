import React from 'react'
import Card from './components/card'

class LandingLayout extends React.Component {
    render() {
        return (
            <div className>
                <div>
                    <h1>Wander</h1>
                </div>
                <div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <Card>
                                <h4>Log in</h4>
                                    <div class="form-group">
                                        <label htmlFor="emailInput">Email address</label> 
                                        <input id="emailInput" class="form-control" placeholder="Enter email" type="email" />
                                    </div>
                                    <div class="form-group">
                                        <label htmlFor="passwordInput">Password</label> 
                                        <input id="passwordInput" class="form-control" placeholder="Password" type="password" />
                                    </div>

                                    <button class="btn btn-danger" type="button">Log In</button>
                                </Card>
                            </div>

                            <div class="col-md-6">
                                <Card>
                                <h4>Sign up</h4>
                                    <div class="form-group">
                                        <label htmlFor="emailInput">Email address</label> 
                                        <input id="emailInput" class="form-control" placeholder="Enter email" type="email" /> <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div class="form-group">
                                        <label htmlFor="phone">Phone Number</label> 
                                        <input id="phone" class="form-control" placeholder="Enter number" type="email" />
                                    </div>
                                    <div class="form-group">
                                        <label htmlFor="passwordInput">Password</label> 
                                        <input id="passwordInput" class="form-control" placeholder="Password" type="password" />
                                    </div>
                                    <div class="form-group">
                                        <label htmlFor="confirmedPasswordInput">Confirm Password</label> 
                                        <input id="confirmedPasswordInput" class="form-control" placeholder="Password" type="password" />
                                    </div>
                                    <button class="btn btn-danger" type="button">Sign Up</button>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingLayout;