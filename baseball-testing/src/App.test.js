import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './components/Dashboard';

afterEach(rtl.cleanup);

it('increases ball count if less than 3', () => {
  const wrapper = render(<Dashboard />)

});

it('resets strikes and balls at ball count 4', () => {

});

it('increases strike count if less than 2', () => {

});

it('resets strikes and balls at strike count 3', () => {

});

it('increases strike count up to 2 if foul', () => {

});

it('hit resets strike and ball count', () => {

});