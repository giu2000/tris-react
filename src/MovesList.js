import React from 'react';
import PropTypes from 'prop-types';

const ButtonListComponent = (props) => {
    const {description, onClick} = props;
    return(
        <button onClick={onClick}>
            {description}
        </button>
    )
}
ButtonListComponent.propTypes = {
    description: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

const MovesList = (props) => {
    const {history, valueSelect, onClick} = props;

    let moves = history.map((step, indexStep) => {
        const rowIndex = history[indexStep].positionChanged[0];
        const colIndex = history[indexStep].positionChanged[1];
        const description = indexStep ? `Go to move #${indexStep}. Changed element in row: ${rowIndex} and col: ${colIndex} ` : 'Go to start';
        return(
            <li key = {indexStep}>
                <ButtonListComponent 
                    onClick = {() => onClick(indexStep)} 
                    description = {description}
                />
            </li>
        )
    })
    moves = valueSelect === 'cresc' ? moves : moves.reverse();

    return(
        <ol>
            {moves}
        </ol>
    )
}

MovesList.propTypes = {
    history: PropTypes.array.isRequired,
    valueSelect: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default MovesList;


