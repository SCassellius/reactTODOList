import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the page heading', () => {
  const { getByText } = render();
  const linkElement = getByText(/Things to do/i);
  expect(linkElement).toBeInTheDocument();
});
