import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HeadwearPage = () => (
  <div>
    <h1>Headgear Page</h1>
  </div>
);

const JewelryPage = () => (
  <div>
    <h1>Jewelry Page</h1>
  </div>
);

function App() {
  return (
    <div class="App">
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/headwear' component={HeadwearPage} />
          <Route path='/jewelry' component={JewelryPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
