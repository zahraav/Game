import React, { useState } from 'react';
import Grid from './grid';
import { calculateWinner } from './calculate-winner';
import './game.css';
const Game = () => {
    const [board, setBoard] = useState<string[][]>([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;

    const currentSquares = board[currentMove];

    const handleClick = (index: number) => {
        if (currentSquares[index] || calculateWinner(currentSquares)) {
            return;
        }

        const newSquares = currentSquares.slice();
        newSquares[index] = xIsNext ? 'X' : 'O';

        setBoard(prev => [...prev.slice(0, currentMove + 1), newSquares]);
        setCurrentMove(prev => prev + 1);
    };


    const winner = calculateWinner(currentSquares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

    return (
        <div className="game-container">
            <h1 className="header-status">{status}</h1>
            <Grid squares={currentSquares} onSquareClick={handleClick} />
            <button className="reset-button" onClick={() => {
                setBoard([Array(9).fill(null)]);
                setCurrentMove(0);
            }}>Restart</button>
        </div>
    );
};

export default Game;
