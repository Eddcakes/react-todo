import React from 'react';
import cross from './cross.svg';
import mag from './mag.svg';

function SearchForm({searchItems, searchInput, handleSearchInput, clearSearch}){
  return (
    <form role="search" className="search-form" onSubmit={searchItems}>
      <i className="mag">
        <img src={mag} alt="Search icon"></img>
      </i>
      <input 
        type="search"
        name="q"
        autoComplete="off"
        placeholder="search for items"
        aria-label="Search through site content"
        value={searchInput}
        onChange={handleSearchInput}
      />
      <i className="clear-search" onClick={clearSearch}>
        <img src={cross} alt="Clear icon"/>
      </i>
    </form>
  )
}

export default SearchForm