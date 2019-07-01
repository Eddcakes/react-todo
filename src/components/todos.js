import React, { useState, useMemo } from 'react';
import AddForm from './AddForm';
import SearchForm from './SearchForm';
import TodoItem from './TodoItem';

function Todos(){
  const [addInput, setAddInput] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [sortBy, setSortBy] = useState('all')
  const [todos, setTodos] = useState([
    {id: 1, todo: "To market", complete: false},
    {id: 2, todo: "to get there", complete: false},
    {id: 3, todo: "get on the tree to jumpe over the hill", complete: false},
    {id: 4, todo: "and we done", complete: true}
  ])
  const [allTodos, setAllTodos] = useState(todos)
  const addItem = e => {
    e.preventDefault();
    if (addInput.trim().length > 0){
      const idDate = new Date().getTime()
      setTodos([{
      id: idDate,
      todo: addInput,
      complete: false
      }].concat(todos))
      setAllTodos([{
        id: idDate,
        todo: addInput,
        complete: false
        }].concat(allTodos))
      setAddInput('')
    }else{
      console.log("cannot add blank task")
    }
  }
  const handleAddInput = (input) => setAddInput(input.target.value)
  const handleSearchInput = (input) => setSearchInput(input.target.value)
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
      }).filter(todo => todo.hitRate > 0)
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
    const confirmDel = window.confirm(`Are you sure you want to delete this item ${item.id}: "${item.todo}"?`)
    if (confirmDel) setTodos(todos.filter((curItem) => curItem.id !== item.id))
  }
  const completeItem = (item) => {
    setTodos(
      todos.map( (todo) => {
        if(todo.id === item.id){
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

  return (
    <div>
      <AddForm
        addItem={addItem}
        addInput={addInput}
        handleAddInput={handleAddInput}
      />
      <SearchForm
        searchItems={searchItems}
        searchInput={searchInput}
        handleSearchInput={handleSearchInput}
        clearSearch={clearSearch}
      />
      <ul className="filter">
        <li><button name="active" type="button" className={sortBy === 'active' ? 'selected' : ''} onClick={filterBy}>Active</button></li>
        <li><button name="complete" type="button" className={sortBy === 'complete' ? 'selected' : ''} onClick={filterBy}>Complete</button></li>
        <li><button name="all" type="button" className={sortBy === 'all' ? 'selected' : ''} onClick={filterBy}>All</button></li>
      </ul>
      <div>
        <ul className="todos">
          {
            filteredTodos.length > 0
            ? (filteredTodos.map( todo => <TodoItem key={todo.id} item={todo} handleDelete={deleteItem} handleComplete={completeItem}/>))
            : <li><span className="no-items">No items available</span></li>
          }
        </ul>
      </div>
    </div>
  )
}

export default Todos