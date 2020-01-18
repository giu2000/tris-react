import React from 'react';
import ReactDOM from 'react-dom';

import Board from './board.js';
import SelectComponent from './Select.js';
import MovesList from './MovesList.js';
import PlayStatus from './PlayStatus.js';
import {calculateWinner, calculateIndexesOfMove} from './utils.js';


import './index.css';

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            history: [
                {
                    squares: Array(9).fill(null), //ogni squares rappresenta la traslazione in array della situazione della griglia
                    positionChanged: Array(2).fill(null)
                }
            ],
            stepNumber: 0, //contatore di mosse, indica il numero dell' ultima mossa. VALUTARE DI TOGLIERLO
            xIsNext: true, //serve per determinare il prossimo simbolo da stampare, X or O
            valueSelect: 'cresc' //VALUTARE DI FARE UN OGGETTO GAME-INFO E DI METTERLO NEL SUO STATO
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(i){
        let {stepNumber, xIsNext, history} = this.state;
        history = history.slice(0, stepNumber + 1);
        const current = history[history.length-1];
        const squares = current.squares.slice(); // copia dell' array che rappresenta la board
        let positionChanged = current.positionChanged.slice();
        const winner = calculateWinner(squares);
       
        if(winner.line || squares[i]){
            return;
        }

        squares[i] = xIsNext ? 'X' : 'O';
        positionChanged = calculateIndexesOfMove(i)
        this.setState({
            history : history.concat([{
                squares: squares,
                positionChanged: positionChanged
            }]), //concateno alla history il nuovo oggettp che rappresenta l'ultima board aggiornata
            stepNumber: history.length, //aggiorno il valore di step numebr
            xIsNext: !this.state.xIsNext
        })
    }

    jumpTo(indexStep){
        this.setState({
            stepNumber: indexStep,
            xIsNext: (indexStep % 2) === 0
        })
    }

    handleChange(event){
        this.setState({valueSelect: event.target.value});
    }

    renderMoves(){
        const { history } = this.state;
        let moves = history.map((step, indexStep) => {
            const rowIndex = history[indexStep].positionChanged[0];
            const colIndex = history[indexStep].positionChanged[1];
            const desc = indexStep ? `Go to move #${indexStep}. Changed element in row: ${rowIndex} and col: ${colIndex} ` : 'Go to start';
            return(
                <li key={indexStep}>
                    <button onClick={() => this.jumpTo(indexStep)}>{desc}</button>
                </li>
            )
        })
        return moves;
    }

    render(){
        let {history, stepNumber} = this.state;

        const current = history[stepNumber]; //oggetto che rappresenta la board corrente
        const winner = calculateWinner(current.squares); // object with valueSquare and line
        let status = winner.line
            ? `Winner: ${winner.valueSquare}`
            : stepNumber === 9
                ? 'Nobody wins'
                :`Next player: ${this.state.xIsNext ? "X" : "O"}`

        let moves = this.renderMoves();
        moves = this.state.valueSelect === 'cresc' ? moves : moves.reverse();

        return(
            <div className='game'>
                <div className='game-board'>
                    <Board
                        squares = {current.squares}
                        winnerLine = {winner.line}
                        onClick = {i => this.handleClick(i)}
                    />
                </div>
                <div className = 'game-info'>
                    <div>{status}</div>
                    
                    <PlayStatus 
                        winner = {winner}
                        moveNumber = {this.state.stepNumber}
                        xIsNext = {this.state.xIsNext}
                    />
                    <SelectComponent 
                        value = {this.state.valueSelect}
                        onChange = {this.handleChange}
                    />
                    <MovesList  
                        history = {this.state.history}
                        valueSelect = {this.state.valueSelect}
                        onClick = {(index) => this.jumpTo(index)}
                    />
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root'),
)

