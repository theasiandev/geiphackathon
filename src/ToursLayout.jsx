import React from 'react'
import { Redirect } from 'react-router-dom'
import TourCard from './components/tourCard'

class ToursLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = { tours : [] }
    }

    componentDidMount() {
        // async call to get the list of tours here
    }

    render() {
        const { tours } = this.state 

        let tourElements = tours.map( (tour) => {
            return(<div>
                <TourCard title={ tour.title } price={ tour.price } description={ tour.description } />
            </div>)
        })

        return(<div>
            <h1>Tours</h1>
            { tourElements }
        </div>)
    }
}

export default ToursLayout;
