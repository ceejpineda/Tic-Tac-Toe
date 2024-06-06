import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../App';
import ThemeButton from '../components/ThemeButton';
import GameModal from '../components/GameModal';
import History from '../components/History';
import { ReactComponent as Logo } from '../assets/tic-tac-toe-game-svgrepo-com.svg';
import { GameContext } from '../App';
import { GameSessionContext } from '../App';


const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { playerX, setPlayerX, playerY, setPlayerY } = useContext(GameContext);
  const { gameSession } = useContext(GameSessionContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleStartGame = () => {
    if (playerX && playerY) {
      navigate('/game');
    }
  };

  return (
    <div data-theme={theme} className="h-screen w-full flex flex-row items-center justify-center">
      <div className="h-screen w-3/4 flex flex-col items-center justify-between">
        <div className="flex justify-center mt-3">
          <ThemeButton />
        </div>
        <div className="flex flex-col gap-12 items-center">
          <div className="flex font-mono gap-4 items-center">
            <Logo className="fill-primary h-12" />
            <span className="text-secondary text-5xl">Tic Tac Toe!</span>
          </div>
          <div className="flex flex-col gap-2">
            <label className="btn btn-wide btn-primary mb-3" onClick={handleOpenModal}>
              Start New Game
            </label>
            <button className="btn btn-wide btn-accent" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>Show History</button>
          </div>
        </div>
        <a href="https://github.com/ceejpineda" target="_blank" rel="noreferrer" className="btn btn-link">
          @ceejpineda - github
        </a>
      </div>

      <GameModal 
        isModalOpen={isModalOpen} 
        playerX={playerX} 
        setPlayerX={setPlayerX} 
        playerY={playerY} 
        setPlayerY={setPlayerY} 
        handleCloseModal={handleCloseModal} 
        handleStartGame={handleStartGame} 
      />

      <History gameSession={gameSession} isDrawerOpen={isDrawerOpen} />

    </div>
  )
}

export default Home;