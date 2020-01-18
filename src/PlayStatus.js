import React from 'react';
import PropTypes from 'prop-types';

const PlayStatus = (props) => {

    const {winner, moveNumber, xIsNext} = props;
    const nextPlayer = xIsNext ? 'X' : 'O';
    const status = winner.line ? `Winner: ${winner.valueSquare}` : moveNumber === 9 ? 'Nobody wins' : `Next player: ${nextPlayer}`;
    
    return(
        <div>{status}</div>
    )
}

PlayStatus.propTypes = {
    winner: PropTypes.object.isRequired,
    moveNumber: PropTypes.number.isRequired,
    xIsNext: PropTypes.bool.isRequired
}

export default PlayStatus;

