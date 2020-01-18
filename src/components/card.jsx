import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../css/main.css'

const Card = ({ children }) => {
    return(
        <div className={styles.cardStyle}>
            {children}
        </div> 
    )
}

export default Card;

Card.propTypes = {
    children : PropTypes.array.isRequired
}