import React from 'react';
import PropTypes from 'prop-types';

const Square = (props) => {
    return(
        <button 
            style = {props.winnerLine && props.winnerLine.includes(props.index) ? {color: 'red'} : {}}
            className = 'square'
            onClick = {props.onClick}
        >{props.value}</button>
    )
}

Square.propsTypes = {
    winnerLine: PropTypes.array,
    index: PropTypes.number,
    onClick: PropTypes.func
}
export default Square;