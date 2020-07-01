import React from 'react';
import Listen from './components/Listen'    

import './App.scss';

function App() {
  return (
    <div className="App">
      <h1 className="Harmala">HARMALA</h1>
      <div id="Nav">
        <h3>About</h3>
        <h3>Listen</h3>
        <h3>Connect</h3>
      </div>
      <div id="content">
        <Listen />
      </div>
    </div>
  );
}

export default App;

