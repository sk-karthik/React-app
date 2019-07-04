import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../components/dashboard/Dashboard';
import LoginPage from '../components/login/LoginPage';
import About from '../components/about/About';
import isLoggedIn from '../_helpers/isLoggedIn';
import Menu from '../components/navigation/HeaderMenu';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        {isLoggedIn() ?
          < Menu />
          : ''
        }
        <div>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/login" component={LoginPage} />
            <Route path="/about" component={About} />
            <Route path="/dashboard" component={Dashboard} />

          </Switch>
        </div >


      </React.Fragment>
    )
  }
}

export default App;