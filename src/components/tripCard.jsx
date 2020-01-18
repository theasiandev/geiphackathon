import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

const TripCard = ({ title, destination, host, limit, description, startdate, enddate }) => {
    const [redirect, setRedirect] = useState(false)

    let redirectElement;
    if (redirect) {
        redirectElement = (<Redirect to={{
                pathname : '/details',
                state : { 
                    title : title, 
                    destination : destination,
                    host : host,
                    limit : limit,
                    description : description,
                    startdate : startdate,
                    enddate : enddate
                }
            }} 
        />)
    }

    return(
        <div onClick={ setRedirect }>
            { redirectElement }
            <h3>Title: { title }</h3>
            <h4>Destination: { destination }</h4>
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