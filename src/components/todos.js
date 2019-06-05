import React, { useState, useMemo } from 'react';
import TodoItem from './todo-item'

function Todos({tasks}){
  const [input, setInput] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [sortBy, setSortBy] = useState('all')
  const [todos, setTodos] = useState(tasks)
  const [allTodos] = useState(todos)
  const addItem = e => {
    e.preventDefault();
    if(input.trim().length > 0){
      setTodos([{
      key: new Date().getTime(),
      todo: input,
      complete: false
      }].concat(todos))
      setInput('') 
    }
    console.log("cannot add blank task")
    setInput('')
  }  
  //maybe this should be the onChange of the input
  //how to we make sure we only run after stoped typing, 3 seconds or so i guess
  //would be nice for higher hitRate to be at top of list
  const searchItems = e => {
    e.preventDefault();
    const searchTerms = searchInput.toLowerCase().split(' ')
    const tempTodos = todos
    if (searchInput.length > 0){
      const hitTodos = tempTodos.map( todo => {
        let hits = 0;
        searchTerms.forEach( term => {
          if(todo.todo.includes(term)){
            hits += 1
          }
        })
        todo.hitRate = hits
        return todo
      }).filter( todo => todo.hitRate > 0)
      setTodos(hitTodos)
    }else{
      setTodos(allTodos)
    }
  }
  const clearSearch = () => {
    setSearchInput('')
    setTodos(allTodos)
  }
  const deleteItem = (item) => {   
    setTodos( todos.filter((curItem) => curItem.key !== item.key) )
  }
  const completeItem = (item) => {
    setTodos(
      todos.map( (todo) => {
        if(todo.key === item.key){
          todo.complete = !todo.complete
        }
        return todo
      })
    )
  }
  const filterBy = useMemo(
    () => e => {
      e.preventDefault();
      setSortBy(e.target.name)
    }, [setSortBy]
  )
  const filteredTodos = todos.filter( todo => {
    return sortBy !== 'all' 
    ? sortBy === 'complete' 
      ? todo.complete === true 
      : todo.complete === false
    : todo
  })

  return(
    <div>
      <form onSubmit={addItem}>
        <input type="text" placeholder="Add task" value={input} onChange={e => setInput(e.target.value)}/>
        <button type="submit">Add</button>
      </form>
      <form role="search" onSubmit={searchItems}>
        <input type="search" name="q" placeholder="search for items" aria-label="Search through site content" value={searchInput} onChange={e => setSearchInput(e.target.value)}/>
        <span className="clear-search" onClick={clearSearch}>✗</span>
      </form>
      <ul className="filter">
        <li><button name="active" type="button" className={sortBy === 'active' ? 'selected' : ''} onClick={filterBy}>Active</button></li>
        <li><button name="complete" type="button" className={sortBy === 'complete' ? 'selected' : ''} onClick={filterBy}>Complete</button></li>
        <li><button name="all" type="button" className={sortBy === 'all' ? 'selected' : ''} onClick={filterBy}>All</button></li>
      </ul>
      <div>
        <ul className="todos">
          {
            filteredTodos.length > 0 
            ? (
              filteredTodos.map( todo => {
                return <TodoItem key={todo.key} item={todo} handleDelete={deleteItem} handleComplete={completeItem}/>
              })
            )
            : <li><span className="no-items">No items available</span></li>
          }
        </ul>
      </div>
    </div>
  )
}

export default Todos