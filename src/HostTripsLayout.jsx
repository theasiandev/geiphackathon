import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class HostTripsLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            date : Date.now(),
            title : "",
            destination : "Singapore",
            description : "",
            limit : 0,
            startdate : null,
            enddate : null
        }
    }

    render() {
        return(<div>
            <h1>Host Your Own Trip</h1>
            <div>
                <label htmlFor="title">Title: </label>
                <input id="title" type="text" onChange={(e) => this.setState({ title : e.target.value }) }/>
                <label htmlFor="destination">Destination: </label>
                <select onChange={(e) => this.setState({ destination : e.target.value }) }>
                    <option defaultValue value="Singapore">Singapore</option>
                    <option value="Johor Bahru">JB</option>
                    <option value="Bangkok">Bangkok</option>
                    <option value="Jakarta">Jakarta</option>
                </select>
                <label htmlFor="description">Description: </label>
                <input id="description" type="textarea" onChange={(e) => this.setState({ description : e.target.value }) }/>
                <label htmlFor="number">Number of Travellers: </label>
                <input id="number" type="number" onChange={(e) => { this.setState({ limit : e.target.value })} }/>
                <DatePicker id="start" selected={ this.state.date } onChange={(e) => this.setState({ startdate : e.target.value }) }></DatePicker>
                <DatePicker id="end" selected={ this.state.date } onChange={(e) => this.setState({ enddate : e.target.value }) }></DatePicker>
                <button type="button">Submit Listing</button>
            </div>
        </div>)
    }
}

export default HostTripsLayout;

// form with all the details to host a trip