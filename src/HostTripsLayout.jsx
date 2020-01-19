import React from 'react'
import DatePicker from 'react-datepicker'
import { Redirect } from 'react-router-dom'
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from '../css/main.css'


async function submitTrip(title, destination, description, limit, startdate, enddate) {
    fetch('http://127.0.0.1:5000/sendtrip', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            title : title,
            destination : destination, 
            description : description,
            limit : limit,
            startdate : startdate,
            enddate : enddate,
            host : "Peter" // hardcoded
        })
    })
}

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
            enddate : null,
            redirect : false
        }
    }

    render() {

        const { title, destination, description, limit, startdate, enddate, redirect } = this.state

        let redirectElement;
        if (redirect) {
            redirectElement = (<Redirect to="/find" />)
        }

        return(
        <div class="py-5 my-5">
            <div class="container">
                <div class="row">
                    <div class="mx-auto col-lg-6 col-10">
                        { redirectElement }
                        <h1 class="text-center">Host Your Own Trip</h1>
                        <p class="mb-3 text-center">Let's start a trip and travel with other travellers</p>
                        
                        <div class="form-group"> 
                            <label htmlFor="title">Trip title</label>
                            <input class="form-control" id="title" type="text" placeholder="Trip name" onChange={(e) => this.setState({ title : e.target.value }) } />
                        </div>

                        <div class="form-group"> 
                            <label htmlFor="destination">Where would you like to go?</label>
                            <select class="form-control" onChange={(e) => this.setState({ destination : e.target.value }) }>
                                <option defaultValue value="Singapore">Singapore</option>
                                <option value="Johor Bahru">Johor Bahru</option>
                                <option value="Bangkok">Bangkok</option>
                                <option value="Jakarta">Jakarta</option>
                            </select>
                        </div>

                        <div class="form-group"> 
                            <label htmlFor="description">Trip details</label>
                            <textarea id="description" class="form-control" type="text" onChange={(e) => this.setState({ description : e.target.value }) }/>
                        </div>

                        <div class="form-group">
                            <label htmlFor="number">Number of travellers allowed <small>(optional)</small></label>
                            <input id="number" class="form-control" type="number" onChange={(e) => { this.setState({ limit : e.target.value })} }/>
                        </div>
                       
                        <div class="form-group">
                            <label htmlFor="number">Number of days travelling</label><br></br>
                            <div class="d-flex">
                                <DatePicker className={styles.datepicker} id="start" selected={ this.state.date } onChange={(e) => this.setState({ startdate : e.target.value }) }></DatePicker>
                                <p class="mx-2 px-2"> - </p>
                                <DatePicker className={styles.datepicker} id="end" selected={ this.state.date } onChange={(e) => this.setState({ enddate : e.target.value }) }></DatePicker>
                                </div>
                            </div>

                        <button type="button" class="btn btn-danger" class="mx-auto" onClick={() => { submitHost(title, destination, description, limit, startdate, enddate).then(this.setState({ redirect : true })) } }>Submit Listing</button>

                    </div>
                </div>
            </div>
        </div>)
    }
}

export default HostTripsLayout;

// form with all the details to host a trip