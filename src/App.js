import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GuestPage from './pages/Guest';
import LandingPage from './pages/Landing';
import LoginPage from './pages/Login';
import NotesPage from './pages/Notes';
import AccountPage from './pages/Account';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={LandingPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/notes' component={NotesPage} />
          <Route path='/guest' component={GuestPage} />
          <Route path='/account' component={AccountPage} />
        </div>
      </Router>
    );
  }
}
