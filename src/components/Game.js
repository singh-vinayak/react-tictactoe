import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';

const styles = {
    width: '200px',
    margin: '20px auto',
    textAlign:'center',
    display:'flex',
    flexDirection:'column',
};

const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);

    const handleClick = i => {
        const timeInHistory = history.slice(0, stepNumber + 1);
        const current = timeInHistory[stepNumber];
        const squares = [...current];
        

        if (winner || squares[i]) return;
        

        squares[i] = xIsNext ? 'X' : 'O';

        setHistory([...timeInHistory, squares]);

        setStepNumber(timeInHistory.length);

        setXisNext(!xIsNext);
    };

    const jumpTo = step => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
    };

    const renderMoves = () =>
        history.map((_step, move) => {
            const destination = move ? `Got to move #${move}` : 'Go to start';
            return (
                <li key={move} >
                    <button onClick={() => jumpTo(move)}>{destination}</button>
                </li>
            );
        });
        
    const restartGame = () => {
            jumpTo(0)
    }

    return (
        <>
            <Board squares={history[stepNumber]} onClick={handleClick} />
            <div style={styles}>
                {winner ? 'Winner: ' + winner :(stepNumber!==9)? 'Next Player: ' + (xIsNext ? 'X' : 'O'):"Drawn"}
                {stepNumber>0 && renderMoves()}
                {(stepNumber===9 || winner) && <button value="restart-game" onClick={restartGame}>Restart game</button>}
            </div>
        </>
    );
};

export default Game;