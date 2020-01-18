import React from 'react'

class TripDetailsLayout extends React.Component {
    constructor(props) { // pass the trip details in through the props
        super(props)
    }

    render() {
        return(<div>
            <h1>Trip Details</h1>
            <div>
                <h4>Title: { this.props.title }</h4>
                <h4>Destination: { this.props.destination }</h4>
                <h4>Host: { this.props.host }</h4>
                <h4>Number of Travellers: { this.props.number }</h4>
                <h4>Description: { this.props.description }</h4>
                <h4>Date Range: {`${ this.props.startdate }-${ this.props.enddate }`}</h4>
            </div>
            <button type="button">Sign Up!</button>
        </div>)
    }
}

export default TripDetailsLayout;