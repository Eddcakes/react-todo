import React from 'react';
import './App.css';
import Imprint from './components/Imprint';
import Todos from './components/Todos';

/* todo- add state for deciding what tab should be open */

function App() {
  return (
    <div className='App'>
      <header>
        <h1>ToDos</h1>
      </header>
      <Todos />
      <footer>
        <Imprint />
      </footer>
    </div>
  );
}

export default App;
