import React from 'react';

function SearchForm({searchItems, searchInput, handleSearchInput, clearSearch}){
  return (
    <form role="search" onSubmit={searchItems} className="smol-form">
      <input className="input-bar" type="search" name="q" placeholder="search for items" aria-label="Search through site content" value={searchInput} onChange={handleSearchInput}/>
      <span className="clear-search btn-style" onClick={clearSearch}>✗</span>
    </form>
  )
}

export default SearchForm