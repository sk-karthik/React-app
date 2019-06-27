import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import { Route, Switch } from 'react-router-dom'
import Dashboard from '../components/dashboard/Dashboard';
import LoginPage from '../components/login/LoginPage';
import Container from '@material-ui/core/Container';

// More components
class About extends Component {
  render() {
    return (
      <Container component="main" maxWidth="xs" >
        <div className="App" >
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
             </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
             </a>
          </header>
        </div>
      </Container>
    );
  }
}



class App extends React.Component {

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/about" component={About} />
        </Switch>
      </div >
    )
  }
}

export default App;
//https://scotch.io/courses/using-react-router-4/authentication-with-redirect