import React, { Component } from 'react';
import '../styles/App.css';
import LandingPage from './logging/LandingPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
import GuestBar from "./components/logging/navbar/GuestBar";
import NavBar from "./components/logging/navbar/NavBar";
import RequireAuth from "./components/HOC/Authorization";
import NotesPage from "./components/notes/NotesPage";
import AddNotePage from "./components/notes/AddNotePage";
import GuestPage from "./components/guest/GuestPage";
import LoginPage from "./components/logging/log/LoginPage";
import RegistrationPage from "./components/logging/register/RegistrationPage";


class App extends Component {
  render() {
    return (
      <Router>
          {/* <Route exact path='/' component={LandingPage} />
          <Route path='/notes' component={NavBar} /> */}
          {/* <Route exact path="/notes" component={NotesPage} /> */}
          {/* <Route exact path="/notes/add" component={AddNotePage} /> */}
          {/* <Route exact path='/notes' component={RequireAuth(NotesPage)} />
          <Route exact path='/notes/add' component={RequireAuth(AddNotePage)} />
          <Route path='/guest' component={GuestBar} />
          <Route path='/guest' component={GuestPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegistrationPage} /> */}
      </Router>
    );
  }
}

export default App;
