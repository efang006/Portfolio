import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainMenu from '../features/sudoku/components/MainMenu';
import SudokuBoard from '../features/sudoku/components/SudokuBoard';

function SudokuGame() {
  const [screen, setScreen] = useState('menu');
  const [difficulty, setDifficulty] = useState('medium');
  const navigate = useNavigate();

  return (
    <div>
      {screen === 'menu' && (
        <MainMenu
          onStart={(selectedDifficulty) => {
            setDifficulty(selectedDifficulty);
            setScreen('game');
          }}
          onLoadGame={() => {
            const savedGame = JSON.parse(localStorage.getItem('savedGame'));
            if (savedGame) {
              setScreen('game');
            } else {
              alert('No saved game found!');
            }
          }}
        />
      )}
      {screen === 'game' && (
        <SudokuBoard
          difficulty={difficulty}
          onBack={() => setScreen('menu')}
        />
      )}
    </div>
  );
}

export default SudokuGame;