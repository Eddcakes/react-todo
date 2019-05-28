import React, { useState, useMemo } from 'react';
import TodoItem from './todo-item'
function Todos(){
  const [input, setInput] = useState('')
  const [sortBy, setSortBy] = useState('all')
  const [todos, setTodos] = useState([
    {key: 1, todo: "to market", complete: false},
    {key: 2, todo: "to get there", complete: false},
    {key: 3, todo: "and we done", complete: true}
  ])

  const addItem = e => {
    e.preventDefault();
    setTodos([{
      key: new Date().getTime(),
      todo: input,
      complete: false
    }].concat(todos))
    setInput('')
  }

  const deleteItem = (item) => {   
    setTodos( todos.filter( (curItem) => curItem.key !== item.key) )
  }

  const filterBy = useMemo(
    () => e => {
      e.preventDefault();
      setSortBy(e.target.name)
    }, [setSortBy]
  )

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
        <ul className="todos">
          {
            todos.filter( todo => {
              return sortBy !== 'all' 
              ? sortBy === 'complete' ? todo.complete === true : todo.complete === false
              : todo
            }).map( todo => {
              return <TodoItem key={todo.key} item={todo} handleDelete={deleteItem}/>
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Todos