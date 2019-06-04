import React from 'react';
import {useSpring, animated} from 'react-spring'

/*
function TodoItem({item, handleDelete, handleComplete}){
  return(
    <li>
      <span className="bin" onClick={() => handleDelete(item)}>🗑</span>
      <span className={item.complete ? "complete" : "active"}>{item.todo}</span>
      <div className="box" onClick={() => handleComplete(item)}>
        <span>{item.complete ? "✓" : ""}</span>
      </div>
    </li>
  )
}
*/
function TodoItem({item, handleDelete, handleComplete}){
  //item.complete is our state/toggle true
  const { x } = useSpring({ from: { x: 0 }, x: item.complete ? 1 : 0, config: { duration: 1000 } })
  return(
    <animated.li 
      style={{
        opacity: x.interpolate({ output: [0.3, 1] }),
        transform: x
          .interpolate({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
          })
          .interpolate(x => `scale(${x})`)
      }}>
      <span className="bin" onClick={() => handleDelete(item)}>🗑</span>
      <span className={item.complete ? "complete" : "active"}>{item.todo}</span>
      <div className="box" onClick={() => handleComplete(item)}>
        <span>{item.complete ? "✓" : ""}</span>
      </div>
    </animated.li>
  )
}

export default TodoItem