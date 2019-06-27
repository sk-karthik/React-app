import React, { Component } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom'
import Dashboard from '../components/dashboard/Dashboard';
import LoginPage from '../components/login/LoginPage';

class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div >
    )
  }
}

export default App;