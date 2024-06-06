import React from 'react';
import { ReactComponent as XIcon } from '../assets/x-svg.svg';
import { ReactComponent as OIcon } from '../assets/o-svg.svg';
import { ReactComponent as DrawIcon } from '../assets/draw.svg';

const GameStatus = ({ winningSquares, squares, isXNext }) => (
  <div className="flex flex-row items-center gap-x-20 h-12">
    {winningSquares ?
      (
        <div className="flex flex-row gap-x-6 items-center">
          <div className="flex items-center">
            <span className="text-transparent text-primary">
              {squares[winningSquares[0]] === "X" ? <XIcon /> : <OIcon />}
            </span>
            <span className="text-2xl ms-3">Win!</span>
          </div>
        </div>
      )
      :
      squares.includes(null) ? 
      (
        <div className={`transition-all rounded-full w-12 h-12 flex items-center justify-center ${isXNext ? "bg-accent" : "bg-secondary text-sky-50"}`}>
          {isXNext ? <XIcon className="w-6 h-6 fill-slate-50" /> : <OIcon className="w-6 h-6 fill-slate-50" />}
        </div>
      )
      :
      (
        <div className="flex flex-row gap-x-6 items-center">
          <span>
            <DrawIcon />
          </span>
          <span className="font-extrabold text-2xl">
            Draw!
          </span>
        </div>
      )}
  </div>
);

export default GameStatus;
