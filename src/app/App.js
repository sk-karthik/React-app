import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import { Route, Link, Switch, NavLink, BrowserRouter as Router } from 'react-router-dom'
import Dashboard from '../modules/dashboard/Dashboard';
import LoginPage from '../modules/login/LoginPage';
import Container from '@material-ui/core/Container';

//import Demo from './demo';
//import Ikmatui from './Ikmatui';


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
  constructor(props) {
    super(props)
    // the initial application state
    this.state = {
      user: ''
    }
  }

  render() {
    return (
      <div>
        {
          (this.state.user) ?
            <div>
              <Router>
                <div>
                  <ul>
                    <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="active" to="/Dashboard">Dashboard</NavLink></li>
                    <li><NavLink activeClassName="active" to="/About">About</NavLink></li>
                  </ul>
                  <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/About" component={About} />
                  </Switch>
                </div>
              </Router>
            </div>
            :
            <LoginPage />
        }
        {/*  {
          (this.state.user) ?
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
            :
            <div>
              <LoginPage />
              <Ikmatui /> 
      </div>
        } */}
      </div >
    )
  }
}

export default App;
