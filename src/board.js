import React from 'react';
import Square from './Square.js';

export class Board extends React.Component{
    
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