import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home';
import GameContainer from './game/GameContainer';

class App extends Component {

  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/game/:id" component={GameContainer}/>
          </div>
        </Router>
    );
  }
}

export default App;
