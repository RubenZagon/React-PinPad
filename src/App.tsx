import React from 'react';
import './App.css';
import {Pad} from './components/Pad';

// It's straightforward find the code here, if you wanna change in the future
export const VALID_PIN = '154777';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App">
        <Pad ></Pad>
      </div>
    </div>
  );
};

export default App;
