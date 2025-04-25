import React, { useState } from 'react';
import MainMenu from './components/MainMenu';
import SudokuBoard from './components/SudokuBoard';

const screens = {
  MENU: 'menu',
  GAME: 'game'
};

function App() {
  const [screen, setScreen] = useState(screens.MENU);
  const [difficulty, setDifficulty] = useState('medium');

  function handleStartGame(selectedDifficulty) {
    setDifficulty(selectedDifficulty);
    setScreen(screens.GAME);
  }

  return (
    <div>
      {screen === screens.MENU && (
        <MainMenu onStart={handleStartGame} />
      )}
      {screen === screens.GAME && (
        <SudokuBoard difficulty={difficulty} onBack={() => setScreen(screens.MENU)} />
      )}
    </div>
  );
}

export default App;