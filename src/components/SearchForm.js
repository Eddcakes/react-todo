import React from 'react';

function SearchForm({searchItems, searchInput, handleSearchInput, clearSearch}){
  return (
    <form role="search" onSubmit={searchItems} className="smol-form">
      <input className="input-bar" type="search" name="q" placeholder="search for items" aria-label="Search through site content" value={searchInput} onChange={handleSearchInput}/>
      <button type="button" className="clear-search btn-style" onClick={clearSearch}>✗</button>
    </form>
  )
}

export default SearchForm