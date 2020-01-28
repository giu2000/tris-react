import React from 'react';
import PropTypes from 'prop-types';

const Square = (props) => {
    const {winnerLine, index, onClick, value} = props;
    return(
        <button 
            style = {winnerLine && winnerLine.includes(index) ? {color: 'red'} : {}}
            className = 'square'
            onClick = {onClick}
        >{value}</button>
    )
}

Square.propsTypes = {
    winnerLine: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired
}
export default Square;