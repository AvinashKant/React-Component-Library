import React from 'react';
import { render, screen } from '@testing-library/react';
import { Alert } from '../index';
import '@testing-library/jest-dom';


test('renders the alert message', () => {
  render(<Alert message="Hello World" />);
  expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
});
