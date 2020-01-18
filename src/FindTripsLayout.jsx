import React from 'react'
import TripCard from './components/tripCard'

async function getTrips() {
    let response = await fetch('http://127.0.0.1:5000/gettrip')
    let body = await response.json()
    return body
}

class FindTripsLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = { events : [] } // every event contains a name, description, destination, host, limit, startdate, enddate 
    }

    componentDidMount() {
        getTrips().then( (reply) => {
            console.log(reply, "outside")
            this.setState({ events : reply.trips })
        })
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