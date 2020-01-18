import React from 'react';
import PropTypes from 'prop-types';

const Square = (props) => {
    const {winnerLine, index, onClick, value} = this.props;
    return(
        <button 
            style = {winnerLine && winnerLine.includes(index) ? {color: 'red'} : {}}
            className = 'square'
            onClick = {onClick}
        >{value}</button>
    )
}

Square.propsTypes = {
    winnerLine: PropTypes.array,
    index: PropTypes.number,
    onClick: PropTypes.func,
    value: PropTypes.number
}
export default Square;