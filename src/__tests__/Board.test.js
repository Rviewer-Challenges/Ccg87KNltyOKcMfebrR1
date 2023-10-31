import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 

import Board from '../components/board';

test('renders with easy difficulty without errors', () => {
  render(
    <MemoryRouter initialEntries={['/play/easy']}>
      <Board />
    </MemoryRouter>
  );
  
});

test('renders with medium difficulty without errors', () => {
  render(
    <MemoryRouter initialEntries={['/play/medium']}>
      <Board />
    </MemoryRouter>
  );
  
});

test('renders with hard difficulty without errors', () => {
  render(
    <MemoryRouter initialEntries={['/play/hard']}>
      <Board />
    </MemoryRouter>
  );

  const cards = screen.getby
  
});

test('shuffles cards', () => {
  // Arrange
  render(
    <MemoryRouter initialEntries={['/play/easy']}>
      <Board />
    </MemoryRouter>
  );

   const cardDeck = screen.getByTestId('card-deck'); // Make sure you add a data-testid to your card deck element
   // Trigger the shuffle function by clicking on the card deck.
   fireEvent.click(cardDeck);
 
 });