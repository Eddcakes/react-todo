import React from 'react';
import './App.css';
import Imprint from './components/imprint'
import Todos from './components/todos'

/* todo- add state for deciding what tab should be open */

const todos = [
  {key: 1, todo: "To market", complete: false},
  {key: 2, todo: "to get there", complete: false},
  {key: 3, todo: "get on the tree to jumpe over the hill", complete: false},
  {key: 4, todo: "and we done", complete: true}
]

function App() {
  return (
    <div className="App">
      <header><h1>ToDos</h1></header>
        <Todos tasks={todos}/>
      <footer>
        <Imprint />
      </footer>
    </div>
  );
}

export default App;
