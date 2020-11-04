import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SearchForm from '../components/SearchForm';

test('find search box by the icon, and click expands', () => {
  const mockSearchItems = jest.fn();
  const mockHandleSearchInput = jest.fn();
  const mockClearSearch = jest.fn();
  const { getByAltText, queryByText } = render(
    <SearchForm
      searchItems={mockSearchItems}
      searchInput={''}
      handleSearchInput={mockHandleSearchInput}
      clearSearch={mockClearSearch}
    />
  );
  const searchIcon = getByAltText(/search icon/i);
  const placeholderText = queryByText(/search for items/i);
  expect(searchIcon).toBeTruthy();
  expect(placeholderText).toBeNull();
  fireEvent.click(searchIcon);
  waitFor(() => expect(queryByText(/search for items/i).toBeTruthy));
  //should be able to wait for clear search to appear
});

test('find search box by aria label and searchBox handles input', () => {
  const mockSearchItems = jest.fn();
  const mockHandleSearchInput = jest.fn();
  const mockClearSearch = jest.fn();
  const { getByLabelText } = render(
    <SearchForm
      searchItems={mockSearchItems}
      searchInput={'test input to search'}
      handleSearchInput={mockHandleSearchInput}
      clearSearch={mockClearSearch}
    />
  );
  const searchInput = getByLabelText(/search through site content/i);
  expect(searchInput.value).toBe('test input to search');
});

//test clear search runs

//test searchItems runs (no button here have to click enter)

//test handlesearchinput runs
