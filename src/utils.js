export function calculateWinner(squares){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],   
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(let i=0; i<lines.length; i++){
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return {
                valueSquare: squares[a],
                line: lines[i]
            }
        }
    }
    return {};
}

export function calculateIndexesOfMove(index){
    const rows = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]; //TODO
    let rowIndex = rows.findIndex(row => row.includes(index)) +1;
    let colIndex = rows[rowIndex - 1].indexOf(index) + 1;
    return [rowIndex, colIndex ]
}