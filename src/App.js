import React, { Component } from 'react';
import './App.css';

import Weather from './containers/Weather';
import NavBar from './containers/NavBar';
import About from './containers/About';
import NotFound from './containers/NotFound';
import Forecast from './containers/Forecast';
import Foot from './ft';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
          <Route exact path = "/" component = {Weather}/>
          <Route path = "/about" component = {About}/>
          <Route exact path = "/forecast" component = {Forecast}/>
          <Route path = "/forecast/:city" render={(props) => <Forecast {...props} />} />

          <Route component = {NotFound}/>
          </Switch>
          <Foot />
        </div>
      </Router>

    );
  }
}

// export default App;
