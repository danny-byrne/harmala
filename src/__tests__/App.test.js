import { cleanup, render, fireEvent, getByText, screen, getAllByAltText } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

test('renders landing page with nav menu, view defaulted to About', () => {
  render(<App />);
  // screen.debug();
  expect(screen.getByText(/about/i)).toBeInTheDocument();
  expect(screen.getByText(/listen/i)).toBeInTheDocument();
  expect(screen.getByText(/connect/i)).toBeInTheDocument();
  expect(screen.getByText(/Harmala is a music project/i)).toBeInTheDocument();
});

test('handles navigation state changes with nav clicks', () => {
  render(<App />);
  fireEvent.click(screen.getByText(/Listen/i));
  expect(screen.getByText(/Albums/i)).toBeInTheDocument();
  // expect(screen.getByText(/selections/i)).toBeInTheDocument();
  // expect(screen.getByText(/improvisations/i)).toBeInTheDocument();
  fireEvent.click(screen.getByText(/connect/i));
  expect(screen.getByText(/Contact Form/i)).toBeInTheDocument();
  fireEvent.click(screen.getByText(/about/i));
  expect(screen.getByText(/Harmala is a music project/i)).toBeInTheDocument();
});



