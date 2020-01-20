import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import styles from '../../css/main.css'

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
        
            <div onClick={ setRedirect} className={styles.cardStyle}>
                { redirectElement }
                <h3>{ title }</h3>
                <p>Date of trip : {`${ startdate }-${ enddate }`}</p>
                <h4>{ destination }</h4>
                <h6>Accepting only 5 traveller(s)</h6>
                <p>{ description }</p>
                <p><i>Hosted by : { host }</i></p>
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