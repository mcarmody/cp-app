import React, { Component } from 'react';
import Header from './header.js';
import ProgressTracker from './progress-tracker.js';
import Footer from './footer.js';
import './header.css';
import './progress-tracker.css';
import  './footer.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProgressTracker/>
      <Footer/>
    </div>
  );
}

export default App;
