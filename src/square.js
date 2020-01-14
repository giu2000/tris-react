import React from 'react';

const Square = (props) => {
    return(
        <button 
            style = {props.winner && props.winner.includes(props.index) ? {color: 'red'} : {}}
            className = 'square'
            onClick = {props.onClick}
        >{props.value}</button>
    )
}
export default Square;