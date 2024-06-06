import React from 'react';
import Scoreboard from '../components/Scoreboard';
import GameBoard from '../components/Gameboard';
import GameStatus from '../components/Gamestatus';
import ActionButtons from '../components/ActionButtons';
import ThemeButton from '../components/ThemeButton';
import { useContext } from 'react';
import { ThemeContext } from '../App';

const Game = ({ roundXwins, roundOwins, roundDraws, renderSquare, winningSquares, squares, isXNext, handleRestart, roundNumber, handleEndSession }) => {
  const { theme } = useContext(ThemeContext);

  const isGameOver = winningSquares || !squares.includes(null);

  return (
    <div className="flex items-center justify-center h-screen" data-theme={theme}>
      <div className="flex flex-col gap-6 items-center justify-center">
        <ThemeButton />
        <Scoreboard roundXwins={roundXwins} roundOwins={roundOwins} roundDraws={roundDraws} roundNumber={roundNumber} />
        <GameBoard renderSquare={renderSquare} />
        <GameStatus winningSquares={winningSquares} squares={squares} isXNext={isXNext} />
        <div className={`h-12 ${isGameOver ? '' : 'invisible'}`}>
          <ActionButtons handleRestart={handleRestart} handleEndSession={handleEndSession} />
        </div>
      </div>   
    </div>
  );
};

export default Game;