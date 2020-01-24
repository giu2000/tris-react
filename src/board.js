import React from 'react';
import PropTypes from 'prop-types';
import Square from './square.js';

<<<<<<< HEAD
=======

>>>>>>> add PropType and minor fix status
export default class Board extends React.Component{

    static propTypes = {
        squares: PropTypes.array.isRequired,
        onClick: PropTypes.func.isRequired,
        winnerLine: PropTypes.array.isRequired
    }
<<<<<<< HEAD

    // TODO: check winnerLine
=======
    
>>>>>>> add PropType and minor fix status
    renderSquare(i){
        const {squares, onClick, winnerLine} = this.props;
        return (
            <Square
                key = {i}
                value = {squares[i]}
                onClick = {() => onClick(i)}
                winnerLine = {winnerLine}
                index = {i}
            />
        )
    }
    render(){
        const rows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];
        return rows.map((row, index) => (
             <div key={index} className='board-row'>
                {row.map(el => this.renderSquare(el))}
        </div>))
    }
}
