import React from 'react';

const GameBoard = ({ renderSquare }) => (
    <div className="grid grid-cols-3 shadow-xl shadow-secondary-content rounded-xl relative">
        {Array.from({ length: 9 }).map((_, index) => renderSquare(index))}
    </div>
);

export default GameBoard;
