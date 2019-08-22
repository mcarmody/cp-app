import React, { Component } from 'react';
import Header from './header.js';
import ProgressTracker from './progress-tracker.js';
import GetStarted from './get-started.js';
import Footer from './footer.js';
import './header.css';
import './progress-tracker.css';
import './get-started.css';
import  './footer.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProgressTracker/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
