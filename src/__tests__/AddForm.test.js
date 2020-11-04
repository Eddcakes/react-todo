import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddForm from '../components/AddForm';

test('renders empty input and add button', () => {
  const mockAddItem = jest.fn();
  const mockAddInput = '';
  const mockHandleAddInput = jest.fn();
  const { getByText, getByPlaceholderText } = render(
    <AddForm
      addItem={mockAddItem}
      addInput={mockAddInput}
      handleAddInput={mockHandleAddInput}
    />
  );
  const input = getByPlaceholderText(/add a new task/i);
  const addBtn = getByText(/add/i);
  expect(input).toBeTruthy();
  expect(input.value).toBe('');
  expect(addBtn).toBeTruthy();
});

test('passed in addInput is input text', () => {
  const mockAddItem = jest.fn();
  const mockAddInput = 'current input text';
  const mockHandleAddInput = jest.fn();
  const { getByPlaceholderText } = render(
    <AddForm
      addItem={mockAddItem}
      addInput={mockAddInput}
      handleAddInput={mockHandleAddInput}
    />
  );
  const input = getByPlaceholderText(/add a new task/i);
  expect(input).toBeTruthy();
  expect(input.value).toBe('current input text');
});

test('Fires submit event on button click ', () => {
  const mockAddItem = jest.fn();
  const mockAddInput = 'current input text';
  const mockHandleAddInput = jest.fn();
  const { getByText } = render(
    <AddForm
      addItem={mockAddItem}
      addInput={mockAddInput}
      handleAddInput={mockHandleAddInput}
    />
  );
  const addBtn = getByText(/add/i);
  expect(addBtn).toBeTruthy();
  //there is no onClick event, this button submits the form so fireEvent submit
  fireEvent.submit(addBtn);
  expect(mockAddItem).toHaveBeenCalledTimes(1);
});
