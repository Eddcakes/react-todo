import React, { useState, useMemo } from 'react';
import TodoItem from './todo-item'
function Todos(){
  const [input, setInput] = useState('')
  const [searchInput, setSearchInput] = useState('')
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
  const searchItems = e => {
    e.preventDefault();
    console.log('search da items')
    console.log(searchInput)
    //fuzzy search
    //trim() the todo
    //split the searchInput toLowerCase each
    const searchTerms = searchInput.toLowerCase().split(' ')
    const fuzzy = todos.filter( todo => {
      searchTerms.forEach( term => {
        
      })
      return todo.todo.trim().toLowerCase()
      //see which todo was hit most by the search terms to be higher up the list?
    })
    console.log({fuzzy, searchTerms})
    //setTodos()
  }
  //maybe this should be the onChange of the input
  //in this case we need to make it a useEffect/memo hook
  //how to we make sure we only run after stoped typing, 3 seconds or so i guess
  const handleChange = e => {
    //setSearchInput(e.target.value)    
  }

  const clearSearch = e => {
    console.log('clear the search')
    setSearchInput('')
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
    ? sortBy === 'complete' ? todo.complete === true : todo.complete === false
    : todo
  })

  return(
    <div>
      <form onSubmit={addItem}>
        <input type="text" placeholder="Add task" value={input} onChange={e => setInput(e.target.value)}/>
        <button type="submit">Add</button>
      </form>
      <form role="search" onSubmit={searchItems}>
        <span className="clear-search" onClick={clearSearch}>✗</span>
        <input type="search" name="q" placeholder="search for items" aria-label="Search through site content" value={searchInput} onChange={e => setSearchInput(e.target.value)}/>
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