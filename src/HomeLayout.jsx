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
                    <input id="country" type="text" />
                    <label htmlFor="country">Country: </label>
                    <h5>When are you leaving?</h5>
                    <DatePicker
                        selected={ this.state.date }
                    >
                    </DatePicker>
                    <button type="button" />
                </div>
            </div>
        )
    }
}

export default HomeLayout;