import React from 'react';

function TodoItem({item}){
  return(
    <li className={item.complete ? "complete" : "active"}>
      {item.todo}
      <div className="box">
        <span>{item.complete ? "✓" : ""}</span>
      </div>
    </li>
  )
}
/*
      {item.todo}
      {
        item.complete 
        ? <div className="box"><span>✓</span></div> 
        : <div className="box"><span></span></div> 
      } */
export default TodoItem