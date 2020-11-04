import React from 'react';
import { render } from '@testing-library/react';
import Imprint from '../components/Imprint';

test('renders without crashing and has expected link', () => {
  const { getByAltText, getByText } = render(<Imprint />);
  const logo = getByAltText('logo');
  const link = getByText(/smashicons/i);

  expect(logo).toBeTruthy();
  expect(link.href).toBe('https://www.flaticon.com/authors/smashicons');
});
