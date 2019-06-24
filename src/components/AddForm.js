import React from 'react';

function AddForm({addItem, addInput, handleAddInput}){
  return (
    <form onSubmit={addItem} className="smol-form">
      <input className="input-bar" type="text" placeholder="Add task" value={addInput} onChange={handleAddInput}/>
      <button type="submit" className="btn-style">Add</button>
    </form>
  )
}

export default AddForm