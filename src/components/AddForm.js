import React from 'react';

function AddForm({addItem, addInput, handleAddInput}){
  return (
    <form onSubmit={addItem}>
      <input type="text" placeholder="Add task" value={addInput} onChange={handleAddInput}/>
      <button type="submit">Add</button>
    </form>
  )
}

export default AddForm