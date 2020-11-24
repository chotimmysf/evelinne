import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div class="App">
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
