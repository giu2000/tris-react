import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board.js';
import PlayStatus from './PlayStatus.js';
import SelectComponent from './Select.js';
import MovesList from './MovesList.js';
import {calculateWinner, calculateIndexesOfMove} from './utils.js';
import './index.css';

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            history: [
                {
                 squares: Array(9).fill(null), 
                 positionChanged: Array(2).fill(null)
                }
            ],
            stepNumber: 0, 
            xIsNext: true, 
            valueSelect: 'cresc' 
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick(i){
        let {stepNumber, xIsNext, history} = this.state;
        history = history.slice(0, stepNumber + 1);
        const current = history[history.length-1];
        const squares = current.squares.slice(); 
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
            }]), 
            stepNumber: history.length, 
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

    render(){
        let {history, stepNumber, valueSelect, xIsNext} = this.state;

        const current = history[stepNumber]; 
        const winner = calculateWinner(current.squares); 

        return(
            <div className='game'>
                <div className='game-board'>
                    <Board 
                        squares = {current.squares}
                        winnerLine =  {winner.line || []}
                        onClick = {i => this.handleClick(i)}
                    />
                </div>
                <div className = 'game-info'>
                    <PlayStatus 
                        winner = {winner}
                        moveNumber = {stepNumber}
                        xIsNext = {xIsNext}
                    />
                    <SelectComponent 
                        value = {valueSelect}
                        onChange = {this.handleChange}
                    />
                    <MovesList  
                        history = {history}
                        valueSelect = {valueSelect}
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

