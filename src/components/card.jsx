import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ children }) => {
    return(<div>
        { children }
    </div>)
}

export default Card;

Card.propTypes = {
    children : PropTypes.array.isRequired
}