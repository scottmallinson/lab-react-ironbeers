import React from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header'
import Beers from './components/Beers'
import Beer from './components/Beer'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'

function App() {
  return (
    <div className="App">
      <Header />
      <Link to="/beers">All beers</Link>
      <Link to="/random-beer">Random beer</Link>
      <Link to="/new-beer">New beer</Link>
      <Switch>
        <Route exact path="/beers" component={Beers} />
        <Route exact path="/beers/:beerid" component={Beer} />
        <Route exact path="/random-beer" component={RandomBeer} />
        <Route exact path="/new-beer" component={NewBeer} />
      </Switch>
    </div>
  );
}

export default App;
