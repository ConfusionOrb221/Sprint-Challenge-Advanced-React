import React from 'react';
import './App.css';
import Player from './components/Player';
import DarkMode from './hooks/DarkMode';

function App() {
  const [darkmode, setDarkMode] = DarkMode(false);

  return (
    <div className="App">
      <button role="button" onClick={() => setDarkMode(!darkmode)}> Change Theme </button>
      <Player />
    </div>
  );
}

export default App;
