import React from 'react'
import PropTypes from 'prop-types'

const TourCard = ({ title, price, description }) => {
    return(<div>
        <h1>{ title }</h1>
        <h4>Price: { price }</h4>
        <p>Description: { description }</p>
    </div>)
}

TourCard.propTypes = {
    title : PropTypes.string.isRequired,
    price : PropTypes.string.isRequired,
    description : PropTypes.string.isRequired
}

export default TourCard;