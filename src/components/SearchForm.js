import React from 'react';

function SearchForm({searchItems, searchInput, handleSearchInput, clearSearch}){
  return (
    <form role="search" className="search-form" onSubmit={searchItems}>
      <input type="search" name="q" placeholder="search for items" aria-label="Search through site content" value={searchInput} onChange={handleSearchInput}/>
      <span className="clear-search" onClick={clearSearch}>✗</span>
    </form>
  )
}

export default SearchForm