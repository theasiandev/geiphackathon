import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class HomeLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date : new Date() }
    }

    render() {
        return(
            <div>
                <div>
                    <h4>Find a Trip</h4>
                    <label htmlFor="country">Country: </label>
                    <input id="country" type="text" />
                    <h5>When are you leaving?</h5>
                    <DatePicker
                        selected={ this.state.date }
                    ></DatePicker><br />
                    <button type="button">Search</button>
                </div>
            </div>
        )
    }
}

export default HomeLayout;