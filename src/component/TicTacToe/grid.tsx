import React from 'react';

interface GridProps {
    squares: (string | null)[];
    onSquareClick: (index: number) => void;
}

const Grid: React.FC<GridProps> = ({ squares, onSquareClick }) => {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 120px)', gap: '10px' }}>
            {squares.map((square, index) => (
                <button key={index} onClick={() => onSquareClick(index)} style={{ width: '120px', height: '120px', fontSize: '24px', color: 'red' }}>
                    {square}
                </button>
            ))}
        </div>
    );
};

export default Grid;
