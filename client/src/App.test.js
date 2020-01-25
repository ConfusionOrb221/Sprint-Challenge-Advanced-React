import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react'
import useDarkMode from './hooks/DarkMode';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('changes theme', () => {

  const { getByRole } = render(<App />)
  const button = (getByRole('button'))

  fireEvent.click(button, {button: 1});

  const body = document.querySelector('body');

  expect(body.className).toBe('dark-mode');
})
