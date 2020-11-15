import React from 'react';
import {DayCalendar} from './components';
import {mockCommitments} from './mock';

function App() {
  return (
    <div className="App">
      <DayCalendar commitments={mockCommitments} />
    </div>
  );
}

export default App;
