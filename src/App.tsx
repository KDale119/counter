import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="App">
          <h2 className="header">Counter</h2>
          <button className="button">Increment</button>
          <button className="button">Decrement</button>

          <div className="currCount">
              Current Count:
          </div>
      </div>
  );
}

export default App;
