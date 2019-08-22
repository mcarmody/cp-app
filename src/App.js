import React, { Component } from 'react';
import Header from './header.js';
import ProgressTracker from './progress-tracker.js';
import './header.css';
import './progress-tracker.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProgressTracker/>
    </div>
  );
}

export default App;
