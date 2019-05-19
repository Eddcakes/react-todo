import React, { useState } from 'react';

function Todos(){
  const [input, setInput] = useState('')
  const [sortBy, setSortBy] = useState('all')
  const [todos, setTodos] = useState([
    {todo: "to market", complete: false},
    {todo: "to get there", complete: false},
    {todo: "and we done", complete: true}
  ])

  const addItem = e => {
    e.preventDefault();
    setTodos([{
      todo: input,
      complete: false
    }].concat(todos))
  }
  const filterBy = e => {
    e.preventDefault();
    setSortBy(e.target.name)
  }
  return(
    <div>
      <form onSubmit={addItem}>
        <input type="text" placeholder="Add task" value={input} onChange={e => setInput(e.target.value)}/>
        <button type="submit">Add</button>
      </form>
      <ul className="filter">
        <li><button name="active" type="button" className={sortBy === 'active' ? 'selected' : ''} onClick={filterBy}>Active</button></li>
        <li><button name="complete" type="button" className={sortBy === 'complete' ? 'selected' : ''} onClick={filterBy}>Complete</button></li>
        <li><button name="all" type="button" className={sortBy === 'all' ? 'selected' : ''} onClick={filterBy}>All</button></li>
      </ul>
      <div>
        <ul>
          {
          todos.filter( item => {
            return sortBy !== 'all' 
            ? sortBy === 'complete' ? item.complete === true : item.complete === false
            : item
          }).map( item => {
            return <li key={item.todo}>{item.todo} Complete: {item.complete ? "Complete" : "Active"}</li>
          })
          }
        </ul>
      </div>
    </div>
  )
}

export default Todos