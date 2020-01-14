import React from 'react';
import Square from './square.js';

export class Board extends React.Component{
    
    renderSquare(i){
        return (
            <Square
                key = {i}
                value = {this.props.squares[i]}
                onClick = {() => this.props.onClick(i)}
                winner = {this.props.winner}
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