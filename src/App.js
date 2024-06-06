import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Board from './Board/Board';
import Home from './Home/Home';
import { useState } from 'react';

export const ThemeContext = React.createContext();

export const GameContext = React.createContext();

export const GameSessionContext = React.createContext();

const App = () => {
  const [theme, setTheme] = useState('sunset');
  const [playerX, setPlayerX] = useState('');
  const [playerY, setPlayerY] = useState('');
  const [gameHistory, setGameHistory] = useState([]);
  const [gameSession, setGameSession] = useState([]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <GameSessionContext.Provider value={{ gameSession, setGameSession }}>
        <GameContext.Provider value={{ playerX, setPlayerX, playerY, setPlayerY, gameHistory, setGameHistory }}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<Board />} />
            </Routes>
          </Router>
        </GameContext.Provider>
      </GameSessionContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App;