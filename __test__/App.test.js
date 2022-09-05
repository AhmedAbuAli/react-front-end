import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('Load and displays starter data', async () => {
  render(<App />);
  const name = await waitFor(() => screen.findByTestId('name'));
  expect(name).toHaveTextContent(`My name is Ahmed`);
  const age = await waitFor(() => screen.findByTestId('age'));
  expect(age).toHaveTextContent(`My age is 22`)
  const gender = await waitFor(() => screen.findByTestId('gender'));
  expect(gender).toHaveTextContent(`My gender is male`)
});