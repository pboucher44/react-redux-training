import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Carte from './Carte';

describe('<Carte />', () => {
  test('it should mount', () => {
    render(<Carte />);

    const carte = screen.getByTestId('Carte');

    expect(carte).toBeInTheDocument();
  });
});
