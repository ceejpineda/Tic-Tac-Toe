import React, { useState, useEffect, useContext } from 'react';
import Game from '../Game/Game';
import { ReactComponent as XIcon } from '../assets/x-svg.svg';
import { ReactComponent as OIcon } from '../assets/o-svg.svg';
import { GameContext } from '../App';
import { GameSessionContext } from '../App';

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

function Square({ className, onClick, value }) {
  return (
    <button className={`flex items-center border-2 border-primary justify-center h-28 w-28 hover:bg-primary active:scale-90 active:shadow-2xl transition-all rounded-xl ${className}`} onClick={onClick}>
      {value === "X" ? (
        <XIcon className="w-14 h-14 fill-accent" />
      ) : value === 'O' ? (
        <OIcon className="w-14 h-14 fill-secondary" />
      ) : null
      }
    </button>
  );
}

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winningSquares, setWinningSquares] = useState(null);
  const [roundXwins, setRoundXwins] = useState(0);
  const [roundOwins, setRoundOwins] = useState(0);
  const [roundDraws, setRoundDraws] = useState(0);
  const [roundNumber, setRoundNumber] = useState(1);
  const { gameHistory, setGameHistory } = useContext(GameContext);
  const { gameSession, setGameSession } = useContext(GameSessionContext);
  const { playerX, playerY } = useContext(GameContext);

  const handleClick = i => {
    if (winningSquares || squares[i]) {
      return;
    }
    setSquares(prevSquares => {
      const newSquares = [...prevSquares];
      newSquares[i] = isXNext ? "X" : "O";
      return newSquares;
    });
    setIsXNext(prevIsXNext => !prevIsXNext);
  };

  useEffect(() => {
    let winner = null;
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        winner = squares[a];
        setWinningSquares(winningCombinations[i]);
        break;
      }
    }
    if (!winner && squares.every(square => square !== null)) {
      winner = "Draw";
    }
    if (winner === "X") {
      setRoundXwins(prevroundXwins => prevroundXwins + 1);
    } else if (winner === "O") {
      setRoundOwins(prevroundOwins => prevroundOwins + 1);
    } else if (winner === "Draw") {
      setRoundDraws(prevroundDraws => prevroundDraws + 1);
    }
    if (winner) {
      setGameHistory(prevGameHistory => [...prevGameHistory, {roundNumber, squares, winner }]);
    }
  }, [squares, setGameHistory, roundNumber, playerX, playerY]);

  function handleRestart() {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
    setWinningSquares(null);
    setRoundNumber(prevRoundNumber => prevRoundNumber + 1);
  }

  function handleEndSession() {
    const lastSessionNumber = gameSession.length > 0 ? gameSession[gameSession.length - 1].sessionNumber : 0;
    const newSessionNumber = lastSessionNumber + 1;
  
    let scoreX = 0;
    let scoreY = 0;
    let scoreDraw = 0;
  
    gameHistory.forEach(game => {
      if (game.winner === 'X') {
        scoreX++;
      } else if (game.winner === 'O') {
        scoreY++;
      } else {
        scoreDraw++;
      }
    });

    let sessionWinner = scoreX > scoreY ? playerX : scoreY > scoreX ? playerY : 'Draw';
  
    setRoundNumber(1);
    setRoundXwins(0);
    setRoundOwins(0);
    setRoundDraws(0);
    setGameHistory([]);
    setGameSession(prevGameSession => [...prevGameSession, { sessionNumber: newSessionNumber, games: gameHistory, score: { playerX: scoreX, playerY: scoreY, draw: scoreDraw }, players: { playerX, playerY }, winner: sessionWinner}]);
  }

  function renderSquare(i) {
    const isWinningSquare = winningSquares && winningSquares.includes(i);
    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => handleClick(i)}
        className={`${isWinningSquare ? "bg-accent-content" : ""}`}
      />
    );
  }

  return (
    <Game
      roundXwins={roundXwins}
      roundOwins={roundOwins}
      roundDraws={roundDraws}
      renderSquare={renderSquare}
      winningSquares={winningSquares}
      squares={squares}
      isXNext={isXNext}
      handleRestart={handleRestart}
      roundNumber={roundNumber}
      handleEndSession={handleEndSession}
    />
  );
};

export default Board;
