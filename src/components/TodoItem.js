import React from 'react';

function TodoItem({item, handleDelete, handleComplete}){
  return (
    <li>
      <span className="bin" onClick={() => handleDelete(item)}>🗑</span>
      <span className={item.complete ? "complete" : "active"}>{item.todo}</span>
      <div className="box" onClick={() => handleComplete(item)}>
        <span>{item.complete ? "✓" : ""}</span>
      </div>
    </li>
  )
}

export default TodoItem