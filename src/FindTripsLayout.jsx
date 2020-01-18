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
            this.setState({ events : reply.trips })
        })
    }

    render() {
        const { events } = this.state

        let eventElements = events.map( (event) => {
            return(
                    <div class="col-md-3">
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
                <div class="container-fluid mt-5" >
                        <div class="row">
                            { eventElements }
                        </div>
                 </div>
            </div>
        )
    }
}

export default FindTripsLayout;