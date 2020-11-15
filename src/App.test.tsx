import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {mockAppointments} from './mock';

test('Check hour block on screen', () => {
  render(<App appointments={mockAppointments} />);
  const mainHour = screen.getByText(/08:00/i);
  const secondaryHour = screen.getByText(/08:30/i);
  const period = screen.getAllByText(/am/i);
  expect(mainHour).toBeInTheDocument();
  expect(secondaryHour).toBeInTheDocument();
  expect(period[0]).toBeInTheDocument();
});

test('Check specific text block on screen', () => {
  render(<App appointments={mockAppointments} />);
  const text = screen.getByText('Meeting with the CTO');
  expect(text).toBeInTheDocument();
});

test('Render without appointments', () => {
  render(<App appointments={[]} />);
  const callAsyncTest = async () => {
    const response = await screen.findByText('Meeting with the CTO');
    expect(response).toMatchObject({});
  };
  callAsyncTest();
});
