import React from 'react';
import cross from './cross.svg';
import mag from './mag.svg';

function SearchForm({searchItems, searchInput, handleSearchInput, clearSearch}){
  return (
    <form role="search" className="search-form" onSubmit={searchItems}>
      <input type="search" name="q" autoComplete="off" placeholder="search for items" aria-label="Search through site content" value={searchInput} onChange={handleSearchInput}/>
      <span className="clear-search" onClick={clearSearch}><img src={cross} alt="logo"/></span>
      
    </form>
  )
}

export default SearchForm