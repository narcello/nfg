import React from 'react';
import {DayCalendar} from './components';
import {mockAppointments} from './mock';

function App() {
  return (
    <div className="App">
      <DayCalendar appointments={mockAppointments} />
    </div>
  );
}

export default App;
