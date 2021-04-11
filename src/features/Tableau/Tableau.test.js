import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tableau from './Tableau';

describe('<Tableau />', () => {
  test('it should mount', () => {
    render(<Tableau />);
    
    const tableau = screen.getByTestId('Tableau');

    expect(tableau).toBeInTheDocument();
  });
});