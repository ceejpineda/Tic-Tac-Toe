import React from 'react';
import { ReactComponent as XIcon } from '../assets/x-svg.svg';
import { ReactComponent as OIcon } from '../assets/o-svg.svg';
import { ReactComponent as DrawIcon } from '../assets/draw.svg';

const winningCombinations = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

const History = ({ gameSession, isDrawerOpen }) => {
  const drawerClasses = isDrawerOpen ? 'w-1/4 ease-out visible opacity-100' : 'w-0 ease-in invisible opacity-0';

  return (
    <div className={`absolute right-0 h-screen flex flex-col items-center justify-start w-1/4 gap-6 p-3 border-l border-primary overflow-x-hidden scrollbar-hide hover:overflow-y-auto scrollbar-hide  ${drawerClasses} transition-width duration-200`}>
        <div className="font-thin text-secondary">GAME HISTORY</div>
        {gameSession.length > 0 ? gameSession.map((session, index) => (
          <div key={index} className="flex flex-col text-sm items-center w-full h-64">
            <div className="flex flex-col items-center justify-center w-full">
              <h2>Session {session.sessionNumber}</h2>
              <p>Winner: <span className="font-bold text-primary">{session.winner}</span></p>

              <div>
                <span className='text-accent font-bold'>
                  {session.players.playerX} - 
                </span>
                <span className="font-extrabold text-accent mx-1">
                  X
                </span> 
                <span className="mx-1 font-bold">( {session.score.playerX} - {session.score.playerY} )</span>
                <span className='text-secondary font-extrabold mx-1'>
                  O
                </span>
                <span className="text-secondary font-bold ">
                  - {session.players.playerY}
                </span> 
              </div>
            </div>
            
            <div className="flex flex-row gap-4 justify-start w-full h-64 overflow-x-auto">
              {session.games.map((game, gameIndex) => {
                const winningCombination = winningCombinations.find(combination =>
                  combination.every(index => game.squares[index] === 'X') ||
                  combination.every(index => game.squares[index] === 'O')
                );
                return (
                  <div key={gameIndex} className="flex flex-col items-center gap-3 w-24 m-2">
                    <h3>Round {game.roundNumber}</h3>
                    <div className="flex flex-col items-center justify-center text-center gap-1">
                      <div className='text-xs'>Win: {game.winner}</div>
                      <div>
                        {game.winner === 'X' ? <XIcon /> : game.winner === 'O' ? <OIcon /> : <DrawIcon />}
                      </div>
                    </div>
                    <div className="board">
                      {[...Array(3)].map((_, i) => (
                        <div className="board-row" key={i}>
                          {game.squares.slice(i * 3, i * 3 + 3).map((value, j) => {
                            const squareIndex = i * 3 + j;
                            const isWinningSquare = winningCombination?.includes(squareIndex);
                            return (
                              <div className={`board-cell border border-primary w-6 h-6 ${isWinningSquare ? 'bg-neutral-200' : ''}`} key={j}>
                                <span className={value === 'X' ? 'text-accent' : 'text-secondary'}>{value}</span>
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )) : 'No game history yet'}
      </div>
  );
}

export default History;