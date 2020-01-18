import React from 'react'
import TripCard from './components/tripCard'

async function getTrips() {
    fetch('127.0.0.1:5000/gettrips').then( (response) => {
        return response.json()
    })
}

class FindTripsLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = { events : [] } // every event contains a name, description, destination, host, limit, startdate, enddate 
    }

    componentDidMount() {
        // async call to the api endpoint (fetch)
        getTrips().then(console.log)
    }

    render() {
        const { events } = this.state

        let eventElements = events.map( (event) => {
            return(
                <div>
                    <TripCard
                        title={ event.title }
                        destination={ event.destination }
                        host={ event.host }
                        number={ event.limit }
                        description={ event.description }
                        startdate={ event.startdate }
                        enddate={ event.enddate }
                    >
                    </TripCard>
                </div>
            )
        })

        return(
            <div>
                <h1>Explore Trips</h1>
                { eventElements }
            </div>
        )
    }
}

export default FindTripsLayout;