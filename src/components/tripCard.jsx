import React from 'react'
import PropTypes from 'prop-types'

const TripCard = ({ title, destination, host, limit, description, startdate, enddate }) => {
    return(
        <div>
            <h3>{ title }</h3>
            <h4>{ destination }</h4>
            <h4>Host: { host }</h4>
            <h4>Expected Number: { limit }</h4>
            <p>Description: { description }</p>
            <h4>Date Range: {`${ startdate }-${ enddate }`}</h4>
        </div>
    )
}

TripCard.propTypes = {
    title : PropTypes.string.isRequired,
    destination : PropTypes.string.isRequired,
    host : PropTypes.string.isRequired,
    limit : PropTypes.number.isRequired,
    description : PropTypes.string.isRequired,
    startdate : PropTypes.string.isRequired,
    enddate : PropTypes.string.isRequired
}

export default TripCard;