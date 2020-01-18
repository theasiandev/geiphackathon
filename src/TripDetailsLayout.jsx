import React from 'react'

class TripDetailsLayout extends React.Component {
    constructor(props) { // pass the trip details in through the props
        super(props)
    }

    render() {
        const { title, destination, host, number, description, startdate, enddate } = this.props.location.state.id

        return(<div>
            <h1>Trip Details</h1>
            <div>
                <h4>Title: { title }</h4>
                <h4>Destination: { destination }</h4>
                <h4>Host: { host }</h4>
                <h4>Number of Travellers: { number }</h4>
                <h4>Description: { description }</h4>
                <h4>Date Range: {`${ startdate }-${ enddate }`}</h4>
            </div>
            <button type="button">Sign Up!</button>
        </div>)
    }
}

export default TripDetailsLayout;