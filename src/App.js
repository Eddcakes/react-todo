import React from 'react';
import './App.css';
import Imprint from './imprint'
import Todos from './todos'

/* todo- add state for deciding what tab should be open */

function App() {
  return (
    <div className="App">
      <header><h1>ToDos</h1></header>
      <Todos />
      <footer>
        <Imprint />
      </footer>
    </div>
  );
}

export default App;
