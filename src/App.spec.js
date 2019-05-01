import React from 'react';
import { render } from 'react-testing-library';
import App from './App';
import { exportAllDeclaration } from '@babel/types';

describe('App', () => {
  it('Renders without error', () => {
    render(<App />);

    it('Fails', () => {
      expect(true).toBe(false);
    });
  });
});
