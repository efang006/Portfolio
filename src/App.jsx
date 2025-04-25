import React, { useState } from 'react';
import MainMenu from './components/MainMenu';
import SudokuBoard from './components/SudokuBoard';

const screens = {
  MENU: 'menu',
  GAME: 'game'
};

function App() {
  const [screen, setScreen] = useState(screens.MENU);

  return (
    <div>
      {screen === screens.MENU && (
        <MainMenu onStart={() => setScreen(screens.GAME)} />
      )}
      {screen === screens.GAME && (
        <SudokuBoard onBack={() => setScreen(screens.MENU)} />
      )}
    </div>
  );
}

export default App;