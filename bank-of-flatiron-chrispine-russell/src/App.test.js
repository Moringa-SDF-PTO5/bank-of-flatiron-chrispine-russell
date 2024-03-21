import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders the heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Bank-of-Flatiron-chrispine-russell/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('adds a new transaction when form is submitted', () => {
    render(<App />);
    const descriptionInput = screen.getByPlaceholderText('Enter Description');
    const amountInput = screen.getByPlaceholderText('Enter Amount');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(descriptionInput, { target: { value: 'Test Transaction' } });
    fireEvent.change(amountInput, { target: { value: '100' } });
    fireEvent.click(submitButton);

    const transactionRow = screen.getByText(/Test Transaction/i);
    expect(transactionRow).toBeInTheDocument();
  });

  test('filters transactions when search term is entered', () => {
    render(<App />);
    const searchInput = screen.getByPlaceholderText('Search by description');

    fireEvent.change(searchInput, { target: { value: 'Test' } });

    const transactionRow = screen.getByText(/Test Transaction/i);
    expect(transactionRow).toBeInTheDocument();

    const otherTransactionRow = screen.queryByText(/Other Transaction/i);
    expect(otherTransactionRow).not.toBeInTheDocument();
  });
});
